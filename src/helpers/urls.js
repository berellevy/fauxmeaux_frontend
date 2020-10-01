export const base_url = (post_fix = '') =>  `http://localhost:4000/api/v1/${post_fix}`
export const posts_url = (id = '' ) => base_url(`posts/${id}`)
export const feed_url = (page_num = 0) => base_url(`feed/${page_num}`)
export const users_url = (id = '') => base_url(`users/${id}`)
export const user_posts_url = (username, page_num = 0) => base_url(`${username}/posts/${page_num}`)
export const backload_post_url = (view_id) => base_url(`backload_post/${view_id}`)
export const views_url = (view_id = '') => base_url(`views/${view_id}`)