// Sample data for blog posts
const blogPosts = [
    { title: "First Blog Post", content: "This is the content of my first blog post." },
    { title: "Second Blog Post", content: "This is the content of my second blog post." }
];

// Sample data for meeting notes
const meetingNotes = [
    { date: "2023-10-01", notes: "Discussed project scope and timeline." },
    { date: "2023-10-15", notes: "Reviewed progress and set new milestones." }
];

// Sample data for gallery images
const galleryImages = [
    { src: "image1.jpg", alt: "Image 1" },
    { src: "image2.jpg", alt: "Image 2" }
];

// Function to display blog posts
function displayBlogPosts() {
    const blogPostsContainer = document.getElementById("blog-posts");
    blogPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogPostsContainer.appendChild(postElement);
    });
}

// Function to display meeting notes
function displayMeetingNotes() {
    const meetingNotesContainer = document.getElementById("meeting-notes");
    meetingNotes.forEach(meeting => {
        const meetingElement = document.createElement("div");
        meetingElement.innerHTML = `<h3>${meeting.date}</h3><p>${meeting.notes}</p>`;
        meetingNotesContainer.appendChild(meetingElement);
    });
}

// Function to display gallery images
function displayGalleryImages() {
    const galleryContainer = document.getElementById("gallery-images");
    galleryImages.forEach(image => {
        const imageElement = document.createElement("img");
        imageElement.src = image.src;
        imageElement.alt = image.alt;
        imageElement.style.width = "200px";
        imageElement.style.margin = "10px";
        galleryContainer.appendChild(imageElement);
    });
}

// Call functions to display content
displayBlogPosts();
displayMeetingNotes();
displayGalleryImages();