# Produk card 3d

web untuk menampilkan produk dengan model 3D dan efek neon.

## Pitur
- Model 3D interaktif

## Prepiew
![preview](test.gif)

## Importan!!

```bash

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 50px;
    overflow-x: hidden;
}

.container {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    max-width: 1400px;
    margin: 0 auto;
}

.card {
    --scale: clamp(280px, 25vw, 340px);
    width: var(--scale);
    height: 520px;
    background: linear-gradient(145deg, rgba(255,255,255,0.98), rgba(240,245,255,0.9));
    border-radius: 24px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255,255,255,0.4);
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s ease;
    cursor: pointer;
}

.card:hover {
    transform: translateY(-20px) scale(1.02);
    box-shadow: 0 30px 70px rgba(0,0,0,0.2);
}

.overflow {
    height: 60%;
    position: absolute;
    width: 100%;
    top: 0;
    transition: transform 0.5s ease;
}

.card:hover .overflow {
    transform: scale(1.05);
}

.model {
    width: 100%;
    height: 100%;
}

model-viewer {
    width: 100%;
    height: 100%;
    background: transparent;
    --progress-bar-height: 0px;
    opacity: 0;
    transition: opacity 0.6s ease;
}

model-viewer.loaded {
    opacity: 1;
    animation: fadeIn 1s ease forwards;
}

.content {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 25px;
    text-align: center;
    background: linear-gradient(to top, rgba(255,255,255,1) 60%, transparent 90%);
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: all 0.5s ease;
}

.content h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #1a1a1a;
    text-shadow: 0 0 5px rgba(255,255,255,0.8);
    margin-bottom: 12px;
    opacity: 1;
    transition: transform 0.4s ease, opacity 0.4s ease;
}

.content .description {
    font-size: 0.95rem;
    color: #111;
    line-height: 1.5;
    margin-bottom: 12px;
    transform: translateY(60px);
    opacity: 0;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
}

.card:hover .content .description {
    transform: translateY(0);
    opacity: 1;
    color: #00ffcc;
    text-shadow: 0 0 8px rgba(0,255,204,0.8), 0 0 15px rgba(0,255,204,0.5);
}

.rating {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-bottom: 12px;
    transform: translateY(60px);
    opacity: 0;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease 0.1s;
}

.card:hover .rating {
    transform: translateY(0);
    opacity: 1;
}

.rating .star {
    color: #ffca28;
    font-size: 1.1rem;
    text-shadow: 0 0 5px rgba(255,202,40,0.8);
}

.card:hover .rating .star {
    color: #ffeb3b;
    text-shadow: 0 0 8px rgba(255,235,59,0.8), 0 0 15px rgba(255,235,59,0.5);
}

.price {
    font-size: 1.3rem;
    font-weight: 600;
    color: #111;
    margin-bottom: 15px;
    transform: translateY(60px);
    opacity: 0;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease 0.2s;
}

.card:hover .price {
    transform: translateY(0);
    opacity: 1;
    color: #ff007a;
    text-shadow: 0 0 8px rgba(255,0,122,0.8), 0 0 15px rgba(255,0,122,0.5);
}

.options {
    display: flex;
    justify-content: center;
    gap: 15px;
    opacity: 1;
    transition: transform 0.4s ease;
}

.card:hover .options {
    transform: translateY(-5px);
}

.options div {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid var(--accent);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.options div:hover {
    transform: scale(1.25);
    box-shadow: 0 0 12px rgba(0,0,0,0.25);
}

.glass {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(255,255,255,0.2), transparent 30%);
    transition: opacity 0.5s ease;
}

.card:hover .glass {
    opacity: 0.8;
}

@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
}

@media (max-width: 768px) {
    .card {
        width: 320px;
        height: 500px;
    }
    body {
        padding: 30px;
    }
    .content h2 {
        font-size: 1.6rem;
    }
    .content .description {
        font-size: 0.9rem;
    }
    .price {
        font-size: 1.2rem;
    }
}

@media (max-width: 480px) {
    .container {
        flex-direction: column;
        align-items: center;
    }
    .card {
        width: 90%;
        margin: 25px 0;
    }
}
```
