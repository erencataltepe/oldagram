const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const mainSection = document.querySelector("main");

function render(posts) {
  let articles = "";

  for (let i = 0; i < posts.length; i++) {
    articles += createPostDom(posts[i]);
  }

  mainSection.innerHTML = articles;
}

function createPostDom(post) {
  return `<article>
    <section class="post-header">
      <div class="post-avatar-container">
        <img class="post-avatar" src="${post.avatar}" alt="user avatar" />
      </div>
      <div class="post-header-info">
        <div class="user-fullname">${post.name}</div>
        <div class="user-location">${post.location}</div>
      </div>
    </section>
    <img class="user-post" src="${post.post}" alt="user post"/>
    <section class="post-interactions">
      <div class="post-icons">
        <img class="icons" src="./images/icon-heart.png" alt="like icon"/>
        <img class="icons" src="./images/icon-dm.png" alt="dm icon"/>
        <img class="icons" src="./images/icon-comment.png" alt="comment icon"/>
      </div>
      <div class="post-like-count">
        ${post.likes} likes
      </div>
      <div class="post-comment">
        <span class="post-user-name">${post.username}</span> ${post.comment}
      </div>
    </section>
  </article>`;
}

render(posts);
