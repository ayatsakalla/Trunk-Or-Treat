function resetFlicker() {
        const neonText = document.getElementById('neon-text');
        
        // Pause the animation
        neonText.style.animationPlayState = 'paused';
        
        // Wait for 2000ms
        setTimeout(() => {
            // Show text clearly
            neonText.style.opacity = '1';
            
            // Restart the flicker animation
            neonText.style.animationPlayState = 'running';
        }, 2000);
    }

    // Call the function to reset flicker every 5000ms (or however long your flicker duration is)
    setInterval(resetFlicker, 5000); // Adjust timing as needed