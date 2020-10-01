# FauxMeaux 2.0 Front End


Backend is [here](https://github.com/berellevy/FauxMeaux-backend)

[Short Demo with differentiators (FauxMeaux 2.0)](https://youtu.be/wn-k1jUmqWA)

[Long demo with full functionality (FauxMeaux 1.0)](https://youtu.be/W_5R7iMvfX0)

Functionality:

FauxMeaux 2.0 is an app that is modeled on instagram but ads are different.

## What's different

While ads on instagram will appear *between* every 2 or 3 posts, on FauxMeaux 2.0 ads appear *on top of* every third post. To uncover a post the user needs only tap the ad. This is a vast improvement over the standard ad model. [Read why](https://medium.com/@berellevy/introducing-fauxmeaux-2-0-patent-pending-6b1a14584ab3).

## What's Similar

FauxMeaux has the following typical social media functionality;

- Login
- Signup
- Current User profile page
    - Add a profile avatar 
    - Profile metrics: posts, followers, following.
    - liks to a list of followers and followings
    - a feed of all the posts the user has posted.
- Other user profile Page
    - profile metrics, links to followers and followees, feed of posts.
    - Follow button
    - indication if the user follows the current user.
- Feed
    - View the posts of user that you are following.
    - posts display all comments and can be commented on.
- Post something! 
    - an image
        - currently only a link to an image can be added, however valid links will show you a preview of the image.
    - a caption
- General
    - Search for users
    - usernames that appear on comments and posts are clickable links.
    - overall visual inspiration is taken from instagram.

---

## Stretch Goals

### 1. FauxMeaux 2.0 - completed 
<s>The feed will be very similar to your average social media feed; you will see posts with ads interspersed every second or third post.  
The difference is that each ad will COVER A POST. similar to to v1.0, you just need to click on the ad to reveal the post.</s>

### 2. JS Refactors
    - change fetch to await.
    - refactor redux.

### 3. Tests
    - unit tests on the frontend.

### 4. Mobile app

### 5. Implement a serializer library
    I wrote most of the code to convert to json in the models but it's kind of cluttered so I want to move to a separate place.



## Pipe Dreams

1. Users can react to posts  
    a. users can react to comments
2. image upload capability
3. Users can respond to comments
4. google authentication




