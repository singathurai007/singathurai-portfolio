'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroGlobe: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    let width = mount.clientWidth || 360;
    let height = mount.clientHeight || 360;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      mount.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('WebGL not supported, falling back', e);
      setHasWebGL(false);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.2;

    // Outer Network Sphere (Icosahedron Wireframe in Electric Violet)
    const globeGeometry = new THREE.IcosahedronGeometry(2.35, 2);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globeMesh);

    // Inner Core Sphere in Royal Purple
    const innerGeometry = new THREE.IcosahedronGeometry(1.6, 1);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x6d28d9,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerMesh);

    // Vertex Halo Points
    const pointsGeometry = new THREE.BufferGeometry();
    const pos = globeGeometry.attributes.position;
    pointsGeometry.setAttribute('position', pos);

    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xc4b5fd,
      size: 0.065,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(pointsMesh);

    // Orbiting Particles Ring (Electric Violet & Lavender)
    const particleCount = 120;
    const particleCoords = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 2.6 + (Math.random() - 0.5) * 0.4;
      particleCoords[i * 3] = Math.cos(angle) * radius;
      particleCoords[i * 3 + 1] = (Math.random() - 0.5) * 1.1;
      particleCoords[i * 3 + 2] = Math.sin(angle) * radius;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particleCoords, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x8b5cf6,
      size: 0.05,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const particleRing = new THREE.Points(particleGeometry, particleMaterial);
    particleRing.rotation.x = Math.PI * 0.25;
    scene.add(particleRing);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const clientX = e.clientX - rect.left - rect.width / 2;
      const clientY = e.clientY - rect.top - rect.height / 2;
      mouseX = (clientX / rect.width) * 2;
      mouseY = (clientY / rect.height) * 2;
      targetRotationY = mouseX * 0.45;
      targetRotationX = mouseY * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize handler
    const handleResize = () => {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Visibility / Intersection Observer (Pause when off-screen for maximum performance)
    let isVisible = true;
    let animationFrameId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animationFrameId) {
            renderLoop();
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(mount);

    // Render Loop
    const renderLoop = () => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }

      if (!prefersReducedMotion) {
        // Continuous slow rotation
        globeMesh.rotation.y += 0.0035;
        globeMesh.rotation.x += 0.001;
        innerMesh.rotation.y -= 0.004;
        pointsMesh.rotation.y = globeMesh.rotation.y;
        pointsMesh.rotation.x = globeMesh.rotation.x;
        particleRing.rotation.y += 0.006;

        // Smooth mouse damping
        globeMesh.rotation.y += (targetRotationY - globeMesh.rotation.y) * 0.02;
        globeMesh.rotation.x += (targetRotationX - globeMesh.rotation.x) * 0.02;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      // Cleanup GPU memory
      globeGeometry.dispose();
      globeMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-64 h-64 rounded-full border border-dashed border-[var(--primary)]/40 animate-spin-slow" />
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="w-full h-full relative pointer-events-none select-none flex items-center justify-center"
      aria-hidden="true"
    />
  );
};
export default HeroGlobe;

