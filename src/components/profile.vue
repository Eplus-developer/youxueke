<template>
  <div class="person-info">
    <img src="/static/images/user.png" alt="you didn't see me! " class="avatar">
    <div class="profile-wrapper">
      <p class="user-name">蔡博士</p>
      <p class="profile">我是练习时长两天半的个人学习生</p>
    </div>
    <div class="calendar">
      <img src="/static/icons/calendar.png" alt="you didn't see me! " class="calendar-icon">
    </div>
  </div>
</template>

<script>
  export default {
    props: []
  }
</script>

<style scoped>
  .person-info {
    background: #fff;
    width: 100%;
    position: relative;
    height: 200rpx;
    margin: 0;
  }

  .avatar {
    position: absolute;
    display: block;
    height: 150rpx;
    width: 150rpx;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 25rpx;
  }

  .profile-wrapper {
    position: absolute;
    display: block;
    left: 200rpx;
    text-align: left;
    width: 450rpx;
    top: 50%;
    transform: translateY(-50%);
  }

  .user-name {
    font-size: 1.2em;
  }

  .profile {
    font-size: .7em;
    color: #2f2f2f;
  }

  .calendar {
    position: absolute;
    left: 650rpx;
    top: 50%;
    transform: translateY(-50%);
    height: 50rpx;
    width: 50rpx;
  }

  .calendar-icon {
    width: 100%;
    height: 100%;
  }
</style>
