var posts=["year/11/08/11月的碎碎念/","year/11/03/ROS-raspi/","year/11/13/从零开始一个机械臂/","year/11/03/ROS基础/","year/11/08/关于焦虑/","year/11/08/关于电赛/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };