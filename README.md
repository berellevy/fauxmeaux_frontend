# FauxMeaux Front End


Backend is [here](https://github.com/berellevy/FauxMeaux-backend)

[Short Demo with differentiators](https://youtu.be/pA0NRgoMUy0)

[Long demo with full functionality](https://youtu.be/W_5R7iMvfX0)

Functionality:

FauxMeaux is an app that is modeled on instagram but has a unique method for serving up ads.

## What's different

Posts on FauxMeax are freely viewable for the first 24 hours.
After 24 hours, the post get's locked. So when scrolling to a post that has been locked the user will see the user that posted it, a grey section where the post is, and metrics about the posts popularity at the bottom.  
Unlocking the post is simple, just click anywhere on the locked post and it will change to contain an ad. Below the ad is a clickable link that will take you to the advertiser's website. However, clicking anwhere else on the ad will replace the ad with the post which will remain unlocked.

The users primary motivation to unlock the post is the post metrics; every locked post shows how many views the post has and how many commnets the post has, thus causing FOMO for the user and motivating them to unlock the post.

One more way a user may unlock an ad is by viewing a post within the first 24 hours after it was posted, before it get's locked. Once viewed, the post will remain unlocked for the user.

This patent pending method for increased motivation for users to interact with ads has potential for vast improvement over the current paradigm of social media advertising. 

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

### 1. FauxMeaux 2.0  
    The feed will be very similar to your average social media feed; you will see posts with ads interspersed every second or third post.  
    The difference is that each ad will COVER A POST. similar to to v1.0, you just need to click on the ad to reveal the post.

### 2. Mobile app

### 3. Implement a serializer library
    I wrote most of the code to convert to json in the models but it's kind of cluttered so I want to move to a separate place.



## Pipe Dreams

1. Users can react to posts  
    a. users can react to comments
2. image upload capability
3. Users can respond to comments
4. google authentication




