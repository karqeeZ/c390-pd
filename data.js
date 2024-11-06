const data = {
    index: {
        title: 'Hello',
        introText: `My name is Johnson Chong, <br>
                    and I enjoy <em>designing</em> and <em>developing</em>.`,
        description: `Feel free to look around!`,
    },
    project: [
        {
            id: 1,
            name: 'NutriNourish',
            descriptionOver:`<em>NutriNourish</em> is a web application that allows for users to Create, Read, Update and Delete (CRUD) their very own recipes, whilst providing added features like meal plan organizer as well as a reviews page for users to share their opinions on specific recipes.<br><br>
            Some key features include:<br> <ul><li>Recipes Management: Users can create, view, update, and delete recipes. Each recipe includes essential information such as ingredients, calories, and cooking instructions</li><li>Meal Plans: Users can create personalized meal plans by selecting from available recipes, making meal prep easier and more organized.</li><li>User Reviews: The application features a review system that allows users to leave feedback on recipes, fostering a community of culinary enthusiasts.</li></ul>
            `,
            description:`
            Now, a quick technical breakdown, this web application utilised softwares like <em>Node.js, Express, MySQL, JavaScript, CSS, Bootstrap and HTML</em>. They all play a part in their role to help put together the final product that you see above in the images.
            <br><br>This project was quite the challenge for me as it was my first attempt at making a whole web application. However, it was incredibly rewarding, especially in those moments when all my tests passed successfully, validating the effort i've put into it.`,
            items: [
                { src: '/images/p1/main.png', type: 'image', description: 'Landing Page with healthy eating articles with reccommended recipes on the right' },
                { src: '/images/p1/recipe.png', type: 'image', description: 'Ready to go recipes' },
                { src: '/images/p1/mealplan.png', type: 'image', description: 'Meal plans that organizes the recipes to help with users to plan out their meals' },
                { src: '/images/p1/mealplan2.png', type: 'image', description: '4 diet plans with pre-filled recipes' },
                { src: '/images/p1/mealplandisplay.png', type: 'image', description: 'Recipes within the balanced meal plan' },
                { src: '/images/p1/review.png', type: 'image', description: 'Community sharing of ratings and comments' },
                { src: '/images/p1/about.png', type: 'image', description: 'More about NutriNourish' }
            ],
            type: 'development'
        },
        {
            id: 2,
            name: 'Project 2',
            description:"placeholder",
            items: [
                { src: '/images/project2_1.jpg', type: 'image', description: 'Description for image 1' },
                { src: '/images/project2_2.jpg', type: 'image', description: 'Description for image 2' },
                { src: '/videos/project2_video.mp4', type: 'video', description: 'Description for video' }
            ],
            type: 'development'
        },
        {
            id: 3,
            name: 'Project 3',
            description:"placeholder",
            items: [
                { src: '/images/project3_1.jpg', type: 'image', description: 'Description for image 1' },
                { src: '/images/project3_2.jpg', type: 'image', description: 'Description for image 2' },
                { src: '/videos/project3_video.mp4', type: 'video', description: 'Description for video' }
            ],
            type: 'development'
        },
        {
            id: 4,
            name: '3D model of home setup',
            descriptionOver:`<em>Home setup</em> was a really special project to me as it captures the essence of my setup at home, the place where I've spent countless hours working on projects and completing assignments. 
            This project was really interesting one, having to translate what I see surrounding me everyday into a digital format just pushed me to wanting to perfect every single detail.
            `,
            description:`
            This 3D scene was built on <em>Spline</em> and was inspired by <a class="link-d" href="https://henryheffernan.com/">Henry Heffernan's</a> portfolio website.<br><br>
            This 3D model captures the layout and design of my workspace highlighting key features like my computer desk, peripherals and little personal touches like the pegboard. I only included key components to create a new perspective for my setup to create a minimal look.<br><br>
            `,
            items: [
                { src: '/images/p4/full-setup.jpg', type: 'image', description: 'This is 3D scene created using Spline' },
                { src: '/images/p4/irl.jpg', type: 'image', description: "Take a look at the real thing" },
                { src: '/images/p4/keyboard.jpg', type: 'image', description: 'Keyboard model for the AKKO SPR 75' },
                { src: '/images/p4/pegboard.jpg', type: 'image', description: 'Pegboard for my controller and headphones' },
                { src: '/video/p4-3dsetup.mp4', type: 'video', description: 'This project presented an exciting challenge bringing real-life objects into a 3D simulation' }
            ],
            type: 'design'
        },
        {
            id: 5,
            name: 'Project 5',
            description:"placeholder",
            items: [
                { src: '/images/project5_1.jpg', type: 'image', description: 'Description for image 1' },
                { src: '/images/project5_2.jpg', type: 'image', description: 'Description for image 2' },
                { src: '/videos/project5_video.mp4', type: 'video', description: 'Description for video' }
            ],
            type: 'design'
        },
        {
            id: 6,
            name: 'Project 6',
            description:"placeholder",
            items: [
                { src: '/images/project6_1.jpg', type: 'image', description: 'Description for image 1' },
                { src: '/images/project6_2.jpg', type: 'image', description: 'Description for image 2' },
                { src: '/videos/project6_video.mp4', type: 'video', description: 'Description for video' }
            ],
            type: 'design'
        },
        {
            id: 7,
            name: 'Project 7',
            description:"placeholder",
            items: [
                { src: '/images/project7_1.jpg', type: 'image', description: 'Description for image 1' },
                { src: '/images/project7_2.jpg', type: 'image', description: 'Description for image 2' },
                { src: '/videos/project7_video.mp4', type: 'video', description: 'Description for video' }
            ],
            type: 'design'
        },
        {
            id: 8,
            name: 'Project 8',
            description:"placeholder",
            items: [
                { src: '/images/project8_1.jpg', type: 'image', description: 'Description for image 1' },
                { src: '/images/project8_2.jpg', type: 'image', description: 'Description for image 2' },
                { src: '/videos/project8_video.mp4', type: 'video', description: 'Description for video' }
            ],
            type: 'design'
        },
        
        
        // Add more projects as needed
    ],
    contact: {
        message: `Interested in <br><em>working</em> together?`,
        email: 'johnson@example.com',
        github: 'https://github.com/karqeeZ?tab=repositories',
        linkedin: 'https://linkedin.com/in/johnsonchong'
    }
};

module.exports = data;

