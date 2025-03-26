<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SR Creation - Jewelry Brand</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>

    <!-- Header Section -->
    <header class="header">
        <div class="logo">
            <img src="images/logo.png" alt="SR Creation Logo">
        </div>
        <nav class="nav">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#collection">Collection</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div class="social-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
        </div>
        <button class="menu-toggle">&#9776;</button>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-content">
            <h1>Discover Timeless Elegance</h1>
            <p>Exclusive handcrafted jewelry for every occasion.</p>
            <a href="#collection" class="btn">Explore Collection</a>
        </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
        <h2>About Us</h2>
        <p>SR Creation specializes in crafting unique, luxurious jewelry pieces that blend tradition with modern elegance.</p>
    </section>

    <!-- Collection Section -->
    <section class="collection" id="collection">
        <h2>Our Collection</h2>
        <div class="grid">
            <div class="item"><img src="images/jewelry1.jpg" alt="Jewelry 1"></div>
            <div class="item"><img src="images/jewelry2.jpg" alt="Jewelry 2"></div>
            <div class="item"><img src="images/jewelry3.jpg" alt="Jewelry 3"></div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <h2>Contact Us</h2>
        <form>
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2025 SR Creation. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>