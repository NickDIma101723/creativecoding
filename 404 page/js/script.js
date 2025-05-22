  document.addEventListener('DOMContentLoaded', () => {
            const errorCode = document.getElementById('error-code');
            const message = document.getElementById('message');
            const backButton = document.getElementById('back-button');
            const loadingLine = document.getElementById('loading-line');
            const loadingContainer = document.getElementById('loading-container');

            errorCode.textContent = '401';

            setTimeout(() => {
                loadingLine.classList.add('loading-complete');
            
                setTimeout(() => {
                    loadingContainer.classList.add('loading-hidden');
                    
                    errorCode.classList.add('animate');
                    
                    setTimeout(() => {
                        let count = 401;
                        const endNumber = 404;
                        const countDuration = 1000;
                        const interval = countDuration / (endNumber - count);
                        
                        const counter = setInterval(() => {
                            count++;
                            errorCode.textContent = count;
                            
                            if (count >= endNumber) {
                                clearInterval(counter);
                            }
                        }, interval);
                    }, 500);

                    setTimeout(() => {
                        message.classList.add('message-visible');
                        setTimeout(() => {
                            backButton.classList.add('button-visible');
                        }, 500);
                    }, 1800);
                }, 200);
            }, 100);
            
            backButton.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        });