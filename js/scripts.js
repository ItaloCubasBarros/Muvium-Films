
  function sendMessage(phoneNumber) {
            const message = document.getElementById('message').value;
            const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }


const ACCESS_TOKEN = "IGAASVirv9yUtBZAE5TbGhpU1c3WHFqZA3RraV83VlhNSTJNSzRhX1JnWVpqUFdxa29ZAcXVRX1plMnUwd1JqWDFmTGY1QVVjS1luemdnTUdCbDM5Ry1FazB2N3BSekE3M3hoTkVwWGQ1NVBRV1F2a3BkVER5ZA2xlckhLVjRmb3c1TQZDZD";
const IG_FEED_CONTAINER = document.getElementById("instagram-feed");


fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption&access_token=${ACCESS_TOKEN}`)
    .then(response => response.json())
    .then(data => {
        const posts = data.data.slice(0, 3); 
        posts.forEach(post => {
         
            const postElement = document.createElement("div");
            postElement.className = "instagram-post";
            postElement.style.width = "500px"; 

      
            if (post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM") {
                postElement.innerHTML = `<a href="${post.permalink}" target="_blank">
                    <img src="${post.media_url}" alt="${post.caption || 'Instagram post'}" class="img-fluid rounded">
                </a>`;
            } else if (post.media_type === "VIDEO") {
                postElement.innerHTML = `<a href="${post.permalink}" target="_blank">
                    <video class="img-fluid rounded" autoplay muted loop>
                        <source src="${post.media_url}" type="video/mp4">
                    </video>
                </a>`;
            }

      
            IG_FEED_CONTAINER.appendChild(postElement);
        });
    })
    .catch(error => console.error("Error fetching Instagram posts:", error));
