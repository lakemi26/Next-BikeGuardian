'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from "./WebCam.css";

const WebcamCapture = () => {
    const videoRef = useRef();
    const canvasRef = useRef();
    const [capturedImage, setCapturedImage] = useState(null);
    const [cameraActive, setCameraActive] = useState(false);
  
    useEffect(() => {
      if (cameraActive) {
        const initializeWebcam = async () => {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          } catch (error) {
            console.error('Error accessing webcam:', error);
          }
        };
  
        initializeWebcam();
      }
    }, [cameraActive]);

    //enviar imagens para spring boot
    const capturePhoto = async () => {
        setCameraActive(false);
      
        const canvas = canvasRef.current;
        canvas.height = videoRef.current.videoHeight;
        canvas.width = videoRef.current.videoWidth;
        const context = canvas.getContext('2d');
        context.drawImage(videoRef.current, 0, 0);
      
        const imageDataURL = canvas.toDataURL();
      
        // Enviar para o servidor
        try {
          const response = await fetch('http://seu-servidor/upload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image: imageDataURL }),
          });
      
          // Lógica adicional após enviar para o servidor, se necessário
        } catch (error) {
          console.error('Erro ao enviar imagem para o servidor:', error);
        }
      
        setCapturedImage(imageDataURL);
      };
  
    const retakePhoto = () => {
      setCameraActive(true);
      setCapturedImage(null);
    };


  
    return (
        <div className={styles.container}>
            <div className={styles.previewContainer}>
            {cameraActive && (
                <video ref={videoRef} autoPlay className={styles.video}></video>
            )}
    
            {!cameraActive && capturedImage && (
                <div className={styles.overlay}>
                <img src={capturedImage} alt="Captured" className={styles.capturedImage} />
                </div>
            )}
    
            {!cameraActive && !capturedImage && (
                <img
                src="../../../../img/frente-bike.png"  // Adicione o caminho correto da imagem de placeholder
                alt="Placeholder"
                className={styles.placeholderImage}
                />
            )}
            </div>
    
            <button onClick={cameraActive ? capturePhoto : retakePhoto} className={styles.button}>
            {cameraActive ? 'Tirar foto' : 'Tirar outra'}
            </button>
    
            {/* Utilize este canvas para capturar a imagem, mas mantenha-o oculto */}
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

            <div className={styles.previewContainer}>
            {cameraActive && (
                <video ref={videoRef} autoPlay className={styles.video}></video>
            )}
    
            {!cameraActive && capturedImage && (
                <div className={styles.overlay}>
                <img src={capturedImage} alt="Captured" className={styles.capturedImage} />
                </div>
            )}
    
            {!cameraActive && !capturedImage && (
                <img
                src="../../../../img/lateral-bike1.png"  // Adicione o caminho correto da imagem de placeholder
                alt="Placeholder"
                className={styles.placeholderImage}
                />
            )}
            </div>
    
            <button onClick={cameraActive ? capturePhoto : retakePhoto} className={styles.button}>
            {cameraActive ? 'Tirar foto' : 'Tirar outra'}
            </button>
    
            {/* Utilize este canvas para capturar a imagem, mas mantenha-o oculto */}
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

            <div className={styles.previewContainer}>
            {cameraActive && (
                <video ref={videoRef} autoPlay className={styles.video}></video>
            )}
    
            {!cameraActive && capturedImage && (
                <div className={styles.overlay}>
                <img src={capturedImage} alt="Captured" className={styles.capturedImage} />
                </div>
            )}
    
            {!cameraActive && !capturedImage && (
                <img
                src="../../../../img/tras-bike.png"  // Adicione o caminho correto da imagem de placeholder
                alt="Placeholder"
                className={styles.placeholderImage}
                />
            )}
            </div>
    
            <button onClick={cameraActive ? capturePhoto : retakePhoto} className={styles.button}>
            {cameraActive ? 'Tirar foto' : 'Tirar outra'}
            </button>
    
            {/* Utilize este canvas para capturar a imagem, mas mantenha-o oculto */}
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        </div>
    );
  };
  export default WebcamCapture;