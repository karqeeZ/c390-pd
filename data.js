const data = {
    index: {
        title: 'Hello',
        introText: `My name is Johnson Chong, <br><div class="con-it">
                    and I enjoy <em class="typing1"> designing</em> and <em class="typing2">developing</em>.</div>`,
        description: `Feel free to look around!`,
    },
    project: [
        {
            id: 1,
            name: 'NutriNourish',
            descriptionOver: `<em>NutriNourish</em> is a web application that allows for users to Create, Read, Update and Delete (CRUD) their very own recipes, whilst providing added features like meal plan organizer as well as a reviews page for users to share their opinions on specific recipes.<br><br>
            Some key features include:<br> <ul><li>Recipes Management: Users can create, view, update, and delete recipes. Each recipe includes essential information such as ingredients, calories, and cooking instructions</li><li>Meal Plans: Users can create personalized meal plans by selecting from available recipes, making meal prep easier and more organized.</li><li>User Reviews: The application features a review system that allows users to leave feedback on recipes, fostering a community of culinary enthusiasts.</li></ul>
            `,
            description: `
            Now, a quick technical breakdown, this web application utilised software tools like <em>Node.js, Express, MySQL, JavaScript, CSS, Bootstrap and HTML</em>. They all play a part in their role to help put together the final product that you see above in the images.
            <br><br>This project was quite the challenge for me as it was my first attempt at making a whole web application. However, it was incredibly rewarding, especially in those moments when all my tests passed successfully, validating the effort i've put into it.<br><br>
            <a class="link-project" href="https://github.com/karqeeZ/MealPlanApp.git"><em>Take a look at the file structure!</em></a>`,
            items: [
                { src: '/images/p1/main.png', type: 'image', description: 'Landing Page with healthy eating articles with reccommended recipes on the right' },
                { src: '/images/p1/recipe.png', type: 'image', description: 'Ready to go recipes' },
                { src: '/images/p1/mealplan.png', type: 'image', description: 'Meal plans that organizes the recipes to help with users to plan out their meals' },
                { src: '/images/p1/mealplan2.png', type: 'image', description: '4 diet plans with pre-filled recipes' },
                { src: '/images/p1/mealplandisplay.png', type: 'image', description: 'Recipes within the balanced meal plan' },
                { src: '/images/p1/review.png', type: 'image', description: 'Community sharing of ratings and comments' },
                { src: '/images/p1/about.png', type: 'image', description: 'More about NutriNourish' }
            ],
            type: 'development',
        },
        {
            id: 2,
            name: 'Game Hub',
            descriptionOver: `<em>Game Hub</em> is a personal project inspired by CodingNepal's YouTube tutorials, where I followed guides to create three fully playable web games:<br><br>
            <ul>
  <li>Snake - Built using HTML, CSS, and JavaScript, this classic game involves guiding a growing snake to collect items while avoiding collisions.</li>
  <li>Tic Tac Toe - A two-player strategy game implemented with JavaScript to handle logic for detecting wins, draws, and turns.</li>
  <li>Typing Speed Test - A game that measures typing speed in words per minute, updating results dynamically as the user types.</li>
  
</ul>
`,
            description: `Now, a quick technical breakdown, Game Hub utilised software tools like <em>HTML</em>, <em>CSS</em> and <em>JavaScript</em>. I found it incredibly fun to create web games, as I could see them slowly come to life with each feature I implemented. Throughout the process, I also learned how to create pop-up windows, adding interactive elements to enhance the user experience.
            <br><br>After completing the games, I designed and developed a custom homepage to host all three games in a centralized, user-friendly interface, showcasing my skills in creating cohesive web applications.
            <br><br>The Typing Speed Test was the most challenging in my opinion, even with <a class="link-project" href="https://youtu.be/Hg80AjDNnJk?si=CxV5Ak3zBDR5PFGx"><em>CodingNepal’s guide.</em></a>  Calculating words per minute dynamically as the user typed was a new and complex task, requiring a deep understanding of event handling and real-time data processing in JavaScript. Overcoming these challenges taught me valuable lessons in JavaScript logic and enhanced my ability to tackle intricate programming problems.
            <br><br><a class="link-project" href="https://karqeez.github.io/JsGames/"><em>Hop on! These classic games are waiting for you!</em></a>`,
            items: [
                { src: '/images/p2/home.png', type: 'image', description: 'Home page for game hub showcasing 3 games' },
                { src: '/video/p2-gamehub.mp4', type: 'video', description: 'Snake' },
                { src: '/video/p2-gamehub-tic.mp4', type: 'video', description: 'Tic Tac Toe' },
                { src: '/video/p2-gamehub-type.mp4', type: 'video', description: 'Speed Typing' },
            ],
            type: 'development'
        },
        {
            id: 3,
            name: '3D model of home setup',
            descriptionOver: `<em>Home setup</em> was a really special project to me as it captures the essence of my setup at home, the place where I've spent countless hours working on projects and completing assignments. 
            This project was really interesting one, having to translate what I see surrounding me everyday into a digital format just pushed me to wanting to perfect every single detail.
            `,
            description: `
            This 3D scene was built on <em>Spline</em> and was inspired by <a class="link-project" href="https://henryheffernan.com/"> <em>Henry Heffernan's</em></a> portfolio website.<br><br>
            This 3D model captures the layout and design of my workspace highlighting key features like my computer desk, peripherals and little personal touches like the pegboard. I only included key components to create a new perspective for my setup to create a minimal look.<br><br>
            <a class="link-project" href="https://app.spline.design/file/d0d336d3-bc32-40d3-9a3f-f419c1064c87"><em>Click here to have a closer look!</em></a>`,
            items: [
                { src: '/images/p3/full-setup.jpg', type: 'image', description: 'This is 3D scene created using Spline' },
                { src: '/images/p3/irl.jpg', type: 'image', description: "Take a look at the real thing" },
                { src: '/images/p3/keyboard.jpg', type: 'image', description: 'Keyboard model for the AKKO SPR 75' },
                { src: '/images/p3/pegboard.jpg', type: 'image', description: 'Pegboard for my controller and headphones' },
                { src: '/video/p3-3dsetup.mp4', type: 'video', description: 'This project presented an exciting challenge bringing real-life objects into a 3D simulation' }
            ],
            type: 'design'
        },
        {
            id: 4,
            name: 'Dine2Gather',
            descriptionOver: `<p><em>Dine2Gather</em> is an app designed to connect users globally through unique, local dining experiences. It features listings posted by local hosts with key details like price, location, menu, and booking slots, and integrates booking and contact features for convenience.</p><br>
                  Some key features include:<br>
                  <ul>
                      <li>Browsing the Catalogue: Users can explore a variety of unique dining experience listings, offering a wide range of local, authentic food opportunities curated by hosts around the world.</li>
                      <li>Booking a Slot: Users can easily book a dining experience by selecting available slots, streamlining the reservation process and ensuring that users secure a spot for their desired experience.</li>
                      <li>Chatting with Hosts: Integrated messaging functionality allows users to communicate directly with hosts for inquiries, clarifications, or additional information about the dining experience, promoting a seamless interaction.</li>
                  </ul>`,
            description: `The inspiration for <em>Dine2Gather</em> came from observing the success of Klook’s streamlined booking system for travel experiences and identifying a gap in the market for a similar platform focused on dining. 
            While there are countless apps for restaurant reservations, few cater specifically to unique, local, and hosted dining experiences. This project sought to fill that niche by creating a user-friendly application that 
            connects travelers and food enthusiasts with hosts offering authentic dining opportunities.<br><br>Through developing this concept, I also gained valuable technical skills in Figma, particularly in implementing pop-ups, 
            conditionals, and variables. These tools allowed me to design dynamic, interactive prototypes that simulated real user flows, enhancing the wireframe’s usability and functionality. This project not only deepened my appreciation 
            for user-centric design but also broadened my technical toolkit for creating engaging interfaces.<br><br><a class="link-project" href="https://www.figma.com/design/DoeOg0h26dd45hzJfMPk42/Dine2Gather-High-fidelity-Wireframe?node-id=0-1&t=XIN1qnBoUwgCkyRc-1"><em>Click here to have a closer look!</em></a>
            `,
            items: [
                { src: '/images/p4/Hi-Fi.png', type: 'image', description: "Welcome to Dine2Gather!" },
                { src: '/images/p4/overview.png', type: 'image', description: "Here's an overview of the wireframes." },
                { src: '/images/p4/sitemap.png', type: 'image', description: 'This is the sitemap layout of the wireframe.' },
                { src: '/video/p4-Dine2Gather.mp4', type: 'video', description: "Here's how it works!" }
            ],
            type: 'design'
        },
        {
            id: 5,
            name: 'StyleShop',
            descriptionOver: `<em>StyleShop</em> is a mobile fashion e-commerce application designed to deliver a seamless shopping 
            experience.<br><br>Its features include:<br>  <ul>
    <li>Essential pages: Home, Product Catalogue, Product Detail, Cart, and Checkout.</li>
    <li>Interactive components: dropdown selectors, quantity pickers, buttons, and input fields.</li>
    <li>Animated elements: checkout screen loader and carousel image banner.</li>
  </ul>`,
            description: `This project involved creating a comprehensive UI kit for <em>StyleShop</em>, including components, variants, 
            fonts, and colors to maintain design consistency. Components such as buttons, dropdowns, and loaders were built 
            with scalability in mind, while variants were utilized to account for different states like hover, active, and 
            disabled. The typography system was carefully selected to balance readability and style, while the color palette 
            was designed to align with the brand's identity and provide a visually cohesive experience. This structured approach 
            ensured efficiency in design iteration and a polished final product.<br><br><a class="link-project" href="https://www.figma.com/design/s7yy5klNniewNc8JW48TVw/CA3-StyleShop?node-id=0-1&t=I79FoyA5QiB2cEFx-1"><em>Click here to have a closer look!</em></a>`,
            items: [
                { src: '/images/p5/hi-fi.png', type: 'image', description: 'Heres the overview of the Hi-Fidelity Wireframe' },
                { src: '/images/p5/uikit.png', type: 'image', description: 'The UI kit used for StyleShop' },
                { src: '/video/styleshop.mp4', type: 'video', description: 'Sample video navigating through the pages' }
            ],
            type: 'design'
        },

        // Add more projects as needed
    ],
    about: {
        message: `Interested in <br><em>working</em> together?`,
        email: 'johnson@example.com',
        github: 'https://github.com/karqeeZ?tab=repositories',
        linkedin: 'https://www.linkedin.com/in/johnsonchongjuinxhen'
    }
};

module.exports = data;

