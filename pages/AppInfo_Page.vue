<template>
   <div class="main">
      <div class="wrapper">
         <div class="detail-app">
            <div class="detail-app.basic margin-bottom">
               <img class="app.avatar" src="https://photos.tutuapp.com/picture/app_ios/cn/002/54/98/20/2549820.175x175-75.jpg">
               <div class="info">
                  <p class="app.name"> Pokémon Go Hack Ulimite Money </p>
                  <div class="bottom">
                     <span class="app.size"> 100MB </span>
                     <rate-star />
                  </div>
               </div>
            </div>
            <div class="detail-app.infomation margin-bottom">
               <p class="title"> Information </p>
               <ul class="list">
                  <li class="item" v-for="item in 4">
                     <p class="key"> Developer </p>
                     <p class="value"> Google LLC </p>
                  </li>
               </ul>
            </div>
            <div class="detail-app.infomation margin-bottom detail-app.screenshot">
               <p class="title"> Screenshot </p>
               <div class="screenshot.list">
                  <ul>
                     <li class="screenshot.item" v-for="item in 5">
                        <img src="https://photos.tutuapp.com/picture/app_ios/cn/003/62/83/14/5dd3b2102fb51.png">
                     </li>
                  </ul>
               </div>
            </div>
            <div class="detail-app.description">
               <div class="title">
                  <span> Description </span>
                  <img src="/assets/content.ic.down.svg">
               </div>
               <p class="content">
                  WARNING: This version is unsecure now. What's New in Version 1.89.2 - PokéStop nominations will be available to level 40 players in Brazil and South Korea - You can now remove Pokémon from your Favorites while in the trade interface - You can now share an Exclusive Raid Pass with one friend - You can now swipe to dismiss in-app notifications - Various bug fixes and performance updates What's New in Version 1.87.3 - Niantic Kids Parent Portal is now avaliable What's New in Version 1.87.2 - Bug fixs. What's New in Version 1.85.5 - You can now use QR Codes to add friends - Improved Pokémon Collection search function lets you search using the term “Lucky” - You can now view map details for PokéStops on your screen - At-a-glance notifications now show when you have sent a Gift or increased your Friendship level with a friend - Additional setting options let you hide Recently Caught Pokémon from friends - In-game notifications have a new UI and interactive capabilities - Various bug fixes and performance updates What's New in Version 1.85.4 - You can now use QR Codes to add friends - Improved Pokémon Collection search function lets you search using the term “Lucky” - You can now view map details for PokéStops on your screen - At-a-glance notifications now show when you have sent a Gift or increased your Friendship level with a friend - Additional setting options let you hide Recently Caught Pokémon from friends - In-game notifications have a new UI and interactive capabilities - Various bug fixes and performance updates What's New in Version 1.81.4 - Bug fixes. What's New in Version 1.81.3 - When Pokémon are traded, there is chance that both traded Pokémon become Lucky Pokémon - You can now sort the Friends List and assign nicknames to Friends - Gifts may now contain Stardust - Trainers now receive XP for sending Gifts - Added the ability to delete unsent Gifts - Various bug fixes and performance updates What's New in Version 1.79.2 -Bug fixes What's New in Version 1.77.1 - Added new social features that allow Trainers to add and remove Friends on their Friend List and build up their Friendship Level. As Trainers gain friendship they’ll earn bonuses when participating in Raid Battles. - Added a new gifting feature which allows Trainers to send friends Gifts they collect from PokéStops. - Added the ability for Trainers to trade Pokémon. - Improved Pokémon Collection screen search functionality enables Trainers to search using “Alola”. What's New in Version 1.75.1 - Improved in-game messaging for error codes. - Added ability to view and activate items, such as Rare Candy and TMs, directly from a Pokémon’s info screen. - Various bug fixes and performance updates. What's New in Version 1.75.0 - Improved in-game messaging for error codes. - Added ability to view and activate items, such as Rare Candy and TMs, directly from a Pokémon’s info screen. - Various bug fixes and performance updates. What's New in Version 1.73.5 - Trainers can now transform Rare Candy to a specific Pokémon’s Candy in bulk. - Various bug fixes and performance updates. What's New in Version 1.73.3 - Trainers can now transform Rare Candy to a specific Pokémon’s Candy in bulk. - Various bug fixes and performance updates. What's New in Version 1.71.1 - Aspect ratios and UI are now optimized for larger screens such as the iPhone X. - Lucky Eggs and Star Pieces are now accessible and usable from the Raid and Gym Battle inventories. - Various bug fixes and performance updates. What's New in Version 1.69.2 - The Nearby Pokémon indicator now prioritizes Pokémon that are not registered to your Pokédex and are at PokéStops near you. - Various bug fixes and performance updates. What's New in Version 1.67.2 - Introduced the new Field Research and Special Research feature that encourages Trainers to complete objectives to earn unique rewards. - Trainers can now discover the Mythical Pokémon Mew for the first time with Special Research! - Various bug fixes and performance updates. What's New in Version 1.65.3 - Facebook credentials can now be used to log into the app via the ‘Account’ section in Settings. - Various bug fixes and performance updates. What's New in Version 1.61.2 - Fix bugs. What's New in Version 1.61.1 - Improved the in-game News feature. - The Pokémon Collection search function now lets Trainers search using “Shiny.” - Various bug fixes and performance updates.
               </p>
            </div>
            <div class="detail-app.infomation margin-bottom intereting">
               <p class="title"> Interting </p>
               <div class="list">
                  <list-app-hot />
               </div>
            </div>
            <div class="download">
               <button> Download </button>
            </div>
         </div>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .main {
      .wrapper {
         .detail-app {
            .margin-bottom {
               margin-bottom: (4.267vw + 7.6);
            }

            .detail-app\.basic {
               display: flex;
               height: 27.2vw;
               padding: 0 5.333vw;
               position: relative;

               .app\.avatar {
                  border-radius: 5.333vw;
                  height: 26.667vw;
                  margin-right: 4.267vw;
                  overflow: hidden;
                  width: 26.667vw;
               }

               .info {
                  position: relative;

                  flex: {
                     basis: 0;
                     grow: 1;
                     shrink: 1;
                  }

                  ;

                  padding: {
                     top: 1.067vw;
                     bottom: 1.067vw;
                  }

                  display: flex;
                  justify-content: space-between;

                  .app\.name {
                     margin: 0;
                     padding: 0;
                     font-weight: 500;
                     line-height: 7.467vw;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     -webkit-box-orient: vertical;
                     -webkit-line-clamp: 2;
                     color: rgb(22, 43, 72);
                     display: -webkit-box;
                     font-size: 5.6vmin;
                  }

                  @font-face {
                     font-family: DIM-Medium;
                     src: url("/fonts/DIN-Medium.ttf");
                  }

                  .bottom {
                     color: rgb(162, 171, 191);
                     display: flex;
                     font-family: DIN-Medium;
                     font-size: 3.733vmin;
                     font-weight: 500;
                     align-items: center;

                     .app\.size {}

                  }
               }
            }

            .detail-app\.infomation {

               .title {
                  color: rgb(47, 64, 89) font-size: 4.8vmin;
                  font-weight: 500;
                  line-height: 6.4vW;
                  padding: 4.267vw 5.333vw;

               }

               .list {
                  padding: 0 5.333vw;
                  margin: 0;
                  list-style: none;

                  .item {
                     display: flex;
                     margin-bottom: 2.133vw;

                     .key {
                        margin: 0;
                        padding: 0;
                        font-size 3.733vmin;
                        font-weight: 500;
                        line-height: 4.267vw;
                        margin-right: 4vw;
                        width: 29.867vw;
                        color: rgb(117, 136, 169);
                        flex-basis: auto;
                        flex-grow: 0;
                        flex-shrink: 0;
                     }

                     .value {
                        margin: 0;
                        padding: 0;
                        flex-grow: 1;
                        flex-shrink: 1;
                        font-size: 3.733vmin;
                        font-weight: 500;
                        line-height: 5.333vw;
                        overflow: hidden;
                        word-break: break-all;

                        color: rgb(55, 77, 115);
                        flex-basis: 0%;
                     }
                  }
               }
            }

            .detail-app\.screenshot {
               .screenshot\.list {
                  overflow: hidden;

                  ul {
                     margin: 0;
                     padding: 0;
                     list-style: none;
                     padding: 0 5.333vw;
                     white-space: nowrap;

                     .screenshot\.item {

                        display: inline-block;
                        height: 64.8vw;
                        margin-right: 4.267vw;
                        overflow: hidden;
                        width: 37.333vw;
                        position: relative;

                        img {
                           border-radius: 2.133vw;
                           position: absolute;
                           object-fit: cover;
                           object-position: center center;
                           width: 100%;
                           height: 100%;
                        }
                     }
                  }
               }
            }

            .detail-app\.description {

               padding-bottom: 0;
               padding-left: 5.333vw;
               padding-right: 5.333vw;
               padding-top: 4.267vw;

               .title {
                  position: relative;
                  margin-bottom: 4.267vw;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;

                  span {
                     color: rgb(22, 43, 72);
                     font-size: 4.8vmin;
                     font-weight: 500;
                  }

                  img {
                     height: 5.867vw;
                     width: 5.867vw;
                  }
               }

               .content {
                  margin: 0;
                  padding: 0;
                  color: rgb(74, 88, 112);
                  font-family: PingFangsC-Medium;
                  font-size: 3.467vmin;
                  font-weight: 400;
                  line-height: 5.067vW;
                  overflow: hidden;
                  transition: height .5s ease;
                  text-overflow: ellipsis;
                  -webkit-boX-orient: vertical;
                  webkit-line-clamp: 3;
                  height: 3em;

               }

               &.max {
                  .title {
                     img {
                        transform: rotate(180deg);
                     }
                  }

                  .content {
                     height: hidden;
                  }
               }
            }

            .intereting {
               overflow: none;
            }

            .download {
               align-items: center;
               background-color: rgb(255, 255, 255);
               bottom: 0;
               display: flex;
               height: 16VW;
               justify-content: center;
               left: 0;
               position: fixed;
               width: 100vw;

               button {
                  background-color: rgb(0, 142, 255);
                  border-radius: 5.333vw;
                  color: rgb(255, 255, 255);
                  font-size: 4.267vmin;
                  font-weight: 500;
                  height: 10.667vw;
                  line-height: 5.333vw;
                  outline-style: none;
                  width: 89.333vw;
                  
               }
            }
         }
      }
   }
</style>
<script>
   import LiteFooter from "../components/Lite.Footer.vue"
   import RateStar from "../components/RateStar.vue"
   import ListAppHot from "../components/ListAppHot.vue"
   export default {
      components: { LiteFooter, RateStar, ListAppHot }
   }
</script>