<script>
export default {
  methods: {
    toggleClassFromChildren(element, childrenTagNames, oldClass, newClass, extraOptions) {
      var totalReplaces = 0;
      for (var x = 0; x < childrenTagNames.length; x++) {
        var childrenToChange = element.getElementsByTagName(childrenTagNames[x]);
        for (var i = 0; i < childrenToChange.length; i++) {
          if (!childrenToChange[i].classList.contains(oldClass)) {
            continue;
          }
          childrenToChange[i].classList.replace(oldClass, newClass);
          totalReplaces++;
        }
      }
      return totalReplaces;
    },
    animatePabloCamaraLoader(show) {
      var pabloCamara = document.getElementById('pablocamara');
      var oldClass = show ? 'start' : 'end';
      var newClass = show ? 'end' : 'start';
      this.toggleClassFromChildren(pabloCamara, ['div'], oldClass, newClass);
    }
  },
  mounted() {
    setTimeout(() => {
      this.animatePabloCamaraLoader(true);
    }, 500);
  },
};
</script>

<template>
  <div id="pablocamara">
    <!-- First letter P -->
    <div class="loadLeftP start"></div>
    <div class="loadUpperP start"></div>
    <div class="loadLowerP start"></div>
    <div class="loadRightP start"></div>

    <!-- First letter A -->
    <div class="loadLeftA start"></div>
    <div class="loadRightA start"></div>
    <div class="loadTopA start"></div>
    <div class="loadBottomA start"></div>



    <!-- First letter B -->
    <div class="loadLeftB start"></div>
    <div class="loadTopB start"></div>
    <div class="loadTopRightB start"></div>
    <div class="loadMiddleB start"></div>
    <div class="loadBottomB start"></div>
    <div class="loadBottomRightB start"></div>

    <!-- First letter L -->
    <div class="loadLeftL start"></div>
    <div class="loadBottomL start"></div>

    <!-- First letter O -->
    <div class="loadLeftO start"></div>
    <div class="loadRightO start"></div>
    <div class="loadTopO start"></div>
    <div class="loadBottomO start"></div>


    <!-- First letter C -->
    <div class="loadTopC start"></div>
    <div class="loadLeftC start"></div>
    <div class="loadBottomC start"></div>

    <!-- Second letter A -->
    <div class="loadA2Hat1 start"></div>
    <div class="loadA2Hat2 start"></div>
    <div class="loadA2Hat3 start"></div>
    <div class="loadA2Hat4 start"></div>
    <div class="loadA2Hat5 start"></div>
    <div class="loadLeftA2 start"></div>
    <div class="loadRightA2 start"></div>
    <div class="loadTopA2 start"></div>
    <div class="loadBottomA2 start"></div>

    <!-- First letter M -->
    <div class="loadLeftM start"></div>
    <div class="loadMiddleM1 start"></div>
    <div class="loadMiddleM2 start"></div>
    <div class="loadMiddleM3 start"></div>
    <div class="loadMiddleM4 start"></div>
    <div class="loadMiddleM5 start"></div>
    <div class="loadRightM start"></div>

    <!-- Third letter A -->
    <div class="loadLeftA3 start"></div>
    <div class="loadRightA3 start"></div>
    <div class="loadTopA3 start"></div>
    <div class="loadBottomA3 start"></div>

    <!-- First letter R -->
    <div class="loadLeftR start"></div>
    <div class="loadUpperR start"></div>
    <div class="loadMiddleR start"></div>
    <div class="loadTopRightR start"></div>
    <div class="loadBottomRightR1 start"></div>
    <div class="loadBottomRightR2 start"></div>
    <div class="loadBottomRightR3 start"></div>

    <!-- Fourth letter A -->
    <div class="loadLeftA4 start"></div>
    <div class="loadRightA4 start"></div>
    <div class="loadTopA4 start"></div>
    <div class="loadBottomA4 start"></div>
  </div>

</template>

<style>

html,body {
  background-color: black;
}

#pablocamara {
  width: 320px;
  height: 120px;
  text-align: center;
  top: 10px;
  margin: auto;
  position: relative;
  /* First letter A */
  /* First letter B */
  /* First letter L */
  /* First letter O */
  /* First letter C */
  /* Second letter A */
  /* First letter M */
  /* Third letter A */
  /* First letter R */
  /* Fourth letter A */
  /* A hat */
}

#pablocamara div {
  position: absolute;
  background-color: #ffffff;
}

#pablocamara .loadLeftP {
  width: 4px;
  top: 10px;
  left: 78px;
  transition: height 1s;
  transition-timing-function: ease-in;
}

#pablocamara .loadLeftP.start {
  height: 0px;
}

#pablocamara .loadLeftP.end {
  height: 30px;
}

#pablocamara .loadUpperP {
  height: 4px;
  top: 10px;
  left: 82px;
  transition: width 1s;
  transition-timing-function: ease-out;
}

#pablocamara .loadUpperP.start {
  width: 0px;
}

#pablocamara .loadUpperP.end {
  width: 25px;
}

#pablocamara .loadLowerP {
  height: 4px;
  left: 78px;
  transition: width 1s, top 1s;
  transition-timing-function: ease-out;
}

#pablocamara .loadLowerP.start {
  width: 0px;
  top: 21px;
}

#pablocamara .loadLowerP.end {
  width: 25px;
  top: 25px;
}

#pablocamara .loadRightP {
  width: 4px;
  left: 103px;
  transition: height 1s, top 1s;
  transition-timing-function: ease-out;
}

#pablocamara .loadRightP.start {
  height: 0px;
  top: 25px;
}

#pablocamara .loadRightP.end {
  height: 15px;
  top: 14px;
}

#pablocamara .loadLeftA {
  width: 4px;
  top: 10px;
  left: 116px;
  transition: height 1s;
  transition-timing-function: ease-in;
}

#pablocamara .loadLeftA.start {
  height: 0px;
}

#pablocamara .loadLeftA.end {
  height: 30px;
}

#pablocamara .loadRightA {
  width: 4px;
  top: 10px;
  left: 138px;
  transition: height 1s;
  transition-timing-function: ease-in;
}

#pablocamara .loadRightA.start {
  height: 0px;
}

#pablocamara .loadRightA.end {
  height: 30px;
}

#pablocamara .loadTopA {
  width: 22px;
  top: 10px;
  left: 120px;
  transition: height 1s;
  transition-timing-function: ease-in;
}

#pablocamara .loadTopA.start {
  height: 0px;
}

#pablocamara .loadTopA.end {
  height: 4px;
}

#pablocamara .loadBottomA {
  width: 22px;
  top: 25px;
  transition: height 1s, left 1s;
  transition-timing-function: ease-in;
}

#pablocamara .loadBottomA.start {
  height: 0px;
  left: 142px;
}

#pablocamara .loadBottomA.end {
  height: 4px;
  left: 120px;
}

#pablocamara .loadLeftB {
  transition: height 1s, width 1s;
  transition-timing-function: ease-in;
  top: 10px;
  left: 149px;
}

#pablocamara .loadLeftB.start {
  width: 0px;
  height: 0px;
}

#pablocamara .loadLeftB.end {
  width: 4px;
  height: 30px;
}

#pablocamara .loadTopB {
  transition: width 1s;
  transition-timing-function: ease-in;
  height: 4px;
  top: 10px;
  left: 151px;
}

#pablocamara .loadTopB.start {
  width: 0px;
}

#pablocamara .loadTopB.end {
  width: 22px;
}

#pablocamara .loadMiddleB {
  transition: width 1.5s, left 1.5s;
  transition-timing-function: ease-out;
  height: 4px;
  top: 23px;
}

#pablocamara .loadMiddleB.start {
  width: 0px;
  left: 10px;
}

#pablocamara .loadMiddleB.end {
  width: 22px;
  left: 151px;
}

#pablocamara .loadBottomB {
  transition: width 1s, height 1s;
  transition-timing-function: ease-in;
  top: 36px;
  left: 151px;
}

#pablocamara .loadBottomB.start {
  width: 0px;
  height: 0px;
}

#pablocamara .loadBottomB.end {
  width: 22px;
  height: 4px;
}

#pablocamara .loadTopRightB {
  transition: top 1s, height 1s;
  transition-timing-function: ease-in;
  transition-delay: 500ms;
  width: 4px;
  left: 172px;
}

#pablocamara .loadTopRightB.start {
  height: 0px;
  top: 0px;
}

#pablocamara .loadTopRightB.end {
  height: 11px;
  top: 12px;
}

#pablocamara .loadBottomRightB {
  transition: top 1s, height 1s, width 1s;
  transition-timing-function: ease-out;
  transition-delay: 500ms;
  left: 172px;
}

#pablocamara .loadBottomRightB.start {
  width: 0px;
  height: 0px;
  top: 12px;
}

#pablocamara .loadBottomRightB.end {
  width: 4px;
  height: 11px;
  top: 26px;
}

#pablocamara .loadLeftL {
  transition: top 2s, height 2s, opacity 2s;
  transition-timing-function: ease-out;
  width: 4px;
  left: 184px;
}

#pablocamara .loadLeftL.start {
  height: 60px;
  top: 60px;
  opacity: 0;
}

#pablocamara .loadLeftL.end {
  height: 30px;
  top: 10px;
  opacity: 1;
}

#pablocamara .loadBottomL {
  transition: width 1s, height 1s;
  transition-timing-function: ease-out;
  top: 36px;
  left: 184px;
}

#pablocamara .loadBottomL.start {
  width: 0px;
  height: 0px;
}

#pablocamara .loadBottomL.end {
  width: 25px;
  height: 4px;
}

#pablocamara .loadLeftO {
  transition: height 2s;
  transition-timing-function: ease-out;
  width: 4px;
  top: 10px;
  left: 217px;
}

#pablocamara .loadLeftO.start {
  height: 0px;
}

#pablocamara .loadLeftO.end {
  height: 30px;
}

#pablocamara .loadRightO {
  transition: width 1s, left 1s;
  transition-timing-function: ease-out;
  height: 30px;
  top: 10px;
}

#pablocamara .loadRightO.start {
  width: 0px;
  left: 320px;
}

#pablocamara .loadRightO.end {
  width: 4px;
  left: 238px;
}

#pablocamara .loadTopO {
  transition: left 1s, opacity 1s;
  transition-timing-function: ease-out;
  width: 25px;
  height: 4px;
  top: 10px;
}

#pablocamara .loadTopO.start {
  left: 120px;
  opacity: 0;
}

#pablocamara .loadTopO.end {
  left: 217px;
  opacity: 1;
}

#pablocamara .loadBottomO {
  transition: width 1s, left 1s;
  transition-timing-function: ease-out;
  height: 4px;
  top: 36px;
}

#pablocamara .loadBottomO.start {
  width: 0px;
  left: 238px;
}

#pablocamara .loadBottomO.end {
  width: 25px;
  left: 217px;
}

#pablocamara .loadLeftC {
  transition: width 1.2s, left 1.2s;
  transition-timing-function: ease-out;
  height: 30px;
  top: 50px;
}

#pablocamara .loadLeftC.start {
  width: 0px;
  left: 0px;
}

#pablocamara .loadLeftC.end {
  width: 4px;
  left: 55px;
}

#pablocamara .loadTopC {
  transition: width 1.2s, opacity 1.2s;
  transition-timing-function: ease-out;
  height: 4px;
  top: 50px;
  left: 59px;
}

#pablocamara .loadTopC.start {
  width: 251px;
  opacity: 0;
}

#pablocamara .loadTopC.end {
  width: 25px;
  opacity: 1;
}

#pablocamara .loadBottomC {
  transition: width 1.2s, opacity 1.2s;
  transition-timing-function: ease-out;
  height: 4px;
  top: 76px;
  left: 59px;
}

#pablocamara .loadBottomC.start {
  width: 251px;
  opacity: 0;
}

#pablocamara .loadBottomC.end {
  width: 25px;
  opacity: 1;
}

#pablocamara .loadLeftA2 {
  transition: height 1s;
  transition-timing-function: ease-in;
  width: 4px;
  top: 50px;
  left: 92px;
}

#pablocamara .loadLeftA2.start {
  height: 0px;
}

#pablocamara .loadLeftA2.end {
  height: 30px;
}

#pablocamara .loadRightA2 {
  transition: height 1s, opacity 1s;
  transition-timing-function: ease-in;
  width: 4px;
  top: 50px;
  left: 114px;
}

#pablocamara .loadRightA2.start {
  height: 80px;
  opacity: 0;
}

#pablocamara .loadRightA2.end {
  height: 30px;
  opacity: 1;
}

#pablocamara .loadTopA2 {
  transition: height 1s;
  transition-timing-function: ease-in;
  width: 22px;
  top: 50px;
  left: 96px;
}

#pablocamara .loadTopA2.start {
  height: 0px;
}

#pablocamara .loadTopA2.end {
  height: 4px;
}

#pablocamara .loadBottomA2 {
  transition: height 1.5s, left 1.5s;
  transition-timing-function: ease-out;
  width: 22px;
  top: 65px;
}

#pablocamara .loadBottomA2.start {
  height: 0px;
  left: 58px;
}

#pablocamara .loadBottomA2.end {
  height: 4px;
  left: 96px;
}

#pablocamara .loadLeftM {
  transition: height 1s, width 1s;
  transition-timing-function: ease-in;
  top: 50px;
  left: 128px;
}

#pablocamara .loadLeftM.start {
  width: 0px;
  height: 0px;
}

#pablocamara .loadLeftM.end {
  width: 4px;
  height: 30px;
}

#pablocamara .loadMiddleM1 {
  transition: height 1s;
  transition-timing-function: ease-in;
  transition-delay: 300ms;
  width: 4px;
  top: 50px;
  left: 132px;
}

#pablocamara .loadMiddleM1.start {
  height: 0px;
}

#pablocamara .loadMiddleM1.end {
  height: 4px;
}

#pablocamara .loadMiddleM2 {
  transition: height 1s;
  transition-timing-function: ease-in;
  transition-delay: 500ms;
  width: 4px;
  top: 54px;
  left: 136px;
}

#pablocamara .loadMiddleM2.start {
  height: 0px;
}

#pablocamara .loadMiddleM2.end {
  height: 4px;
}

#pablocamara .loadMiddleM3 {
  transition: height 1s;
  transition-timing-function: ease-in;
  transition-delay: 600ms;
  width: 4px;
  top: 58px;
  left: 140px;
}

#pablocamara .loadMiddleM3.start {
  height: 0px;
}

#pablocamara .loadMiddleM3.end {
  height: 4px;
}

#pablocamara .loadMiddleM4 {
  transition: height 1s;
  transition-timing-function: ease-in;
  transition-delay: 700ms;
  width: 4px;
  top: 54px;
  left: 144px;
}

#pablocamara .loadMiddleM4.start {
  height: 0px;
}

#pablocamara .loadMiddleM4.end {
  height: 4px;
}

#pablocamara .loadMiddleM5 {
  transition: height 1s;
  transition-timing-function: ease-in;
  transition-delay: 900ms;
  width: 4px;
  top: 50px;
  left: 148px;
}

#pablocamara .loadMiddleM5.start {
  height: 0px;
}

#pablocamara .loadMiddleM5.end {
  height: 4px;
}

#pablocamara .loadRightM {
  transition: width 1.4s, height 1.4s;
  transition-timing-function: ease-in;
  transition-delay: 500ms;
  top: 50px;
  left: 152px;
}

#pablocamara .loadRightM.start {
  width: 0px;
  height: 0px;
}

#pablocamara .loadRightM.end {
  width: 4px;
  height: 40px;
}

#pablocamara .loadLeftA3 {
  transition: height 1s;
  transition-timing-function: ease-in;
  width: 4px;
  top: 50px;
  left: 164px;
}

#pablocamara .loadLeftA3.start {
  height: 0px;
}

#pablocamara .loadLeftA3.end {
  height: 30px;
}

#pablocamara .loadRightA3 {
  transition: height 1s;
  transition-timing-function: ease-in;
  width: 4px;
  top: 50px;
  left: 186px;
}

#pablocamara .loadRightA3.start {
  height: 0px;
}

#pablocamara .loadRightA3.end {
  height: 30px;
}

#pablocamara .loadTopA3 {
  transition: height 1s, left 1s;
  transition-timing-function: ease-in;
  width: 22px;
  top: 50px;
}

#pablocamara .loadTopA3.start {
  height: 0px;
  left: 100px;
}

#pablocamara .loadTopA3.end {
  height: 4px;
  left: 168px;
}

#pablocamara .loadBottomA3 {
  transition: width 1.5s;
  transition-timing-function: ease-out;
  height: 4px;
  top: 65px;
  left: 168px;
}

#pablocamara .loadBottomA3.start {
  width: 0px;
}

#pablocamara .loadBottomA3.end {
  width: 22px;
}

#pablocamara .loadLeftR {
  transition: width 1s, opacity 1s;
  transition-timing-function: ease-in;
  height: 30px;
  top: 50px;
  left: 198px;
}

#pablocamara .loadLeftR.start {
  width: 30px;
  opacity: 0;
}

#pablocamara .loadLeftR.end {
  width: 4px;
  opacity: 1;
}

#pablocamara .loadUpperR {
  transition: height 1s, opacity 1s;
  transition-timing-function: ease-in;
  width: 25px;
  top: 50px;
  left: 202px;
}

#pablocamara .loadUpperR.start {
  height: 30px;
  opacity: 0;
}

#pablocamara .loadUpperR.end {
  height: 4px;
  opacity: 1;
}

#pablocamara .loadMiddleR {
  transition: height 1s, opacity 1s;
  transition-timing-function: ease-in;
  width: 25px;
  top: 65px;
  left: 202px;
}

#pablocamara .loadMiddleR.start {
  height: 30px;
  opacity: 0;
}

#pablocamara .loadMiddleR.end {
  height: 4px;
  opacity: 1;
}

#pablocamara .loadTopRightR {
  transition: height 1s, width 1s, opacity 1s;
  transition-timing-function: ease-out;
  top: 54px;
  left: 223px;
}

#pablocamara .loadTopRightR.start {
  width: 0px;
  height: 0px;
  opacity: 0;
}

#pablocamara .loadTopRightR.end {
  width: 4px;
  height: 15px;
  opacity: 1;
}

#pablocamara .loadBottomRightR1 {
  transition: opacity 1s;
  transition-timing-function: ease-out;
  transition-delay: 1s;
  width: 4px;
  height: 4px;
  top: 69px;
  left: 214px;
}

#pablocamara .loadBottomRightR1.start {
  opacity: 0;
}

#pablocamara .loadBottomRightR1.end {
  opacity: 1;
}

#pablocamara .loadBottomRightR2 {
  transition: opacity 1s;
  transition-timing-function: ease-out;
  transition-delay: 1.2s;
  width: 4px;
  height: 4px;
  top: 73px;
  left: 218px;
}

#pablocamara .loadBottomRightR2.start {
  opacity: 0;
}

#pablocamara .loadBottomRightR2.end {
  opacity: 1;
}

#pablocamara .loadBottomRightR3 {
  transition: opacity 1s;
  transition-timing-function: ease-out;
  transition-delay: 1.4s;
  width: 4px;
  height: 4px;
  top: 77px;
  left: 222px;
}

#pablocamara .loadBottomRightR3.start {
  opacity: 0;
}

#pablocamara .loadBottomRightR3.end {
  opacity: 1;
}

#pablocamara .loadLeftA4 {
  transition: opacity 1s, height 1s;
  transition-timing-function: ease-in;
  width: 4px;
  top: 50px;
  left: 236px;
}

#pablocamara .loadLeftA4.start {
  height: 80px;
  opacity: 0;
}

#pablocamara .loadLeftA4.end {
  height: 30px;
  opacity: 1;
}

#pablocamara .loadRightA4 {
  transition: height 1s;
  transition-timing-function: ease-out;
  width: 4px;
  top: 50px;
  left: 258px;
}

#pablocamara .loadRightA4.start {
  height: 0px;
}

#pablocamara .loadRightA4.end {
  height: 30px;
}

#pablocamara .loadTopA4 {
  transition: height 1s;
  transition-timing-function: ease-in;
  width: 22px;
  top: 50px;
  left: 240px;
}

#pablocamara .loadTopA4.start {
  height: 0px;
}

#pablocamara .loadTopA4.end {
  height: 4px;
}

#pablocamara .loadBottomA4 {
  transition: width 1.8s;
  transition-timing-function: ease-out;
  height: 4px;
  top: 65px;
  left: 240px;
}

#pablocamara .loadBottomA4.start {
  width: 0px;
}

#pablocamara .loadBottomA4.end {
  width: 22px;
}

#pablocamara .loadA2Hat1 {
  transition: opacity 1s;
  transition-timing-function: ease-out;
  transition-delay: 1.4s;
  width: 4px;
  height: 4px;
  top: 44px;
  left: 96px;
}

#pablocamara .loadA2Hat1.start {
  opacity: 0;
}

#pablocamara .loadA2Hat1.end {
  opacity: 1;
}

#pablocamara .loadA2Hat2 {
  transition: opacity 1s;
  transition-timing-function: ease-out;
  transition-delay: 1.5s;
  width: 4px;
  height: 4px;
  top: 40px;
  left: 100px;
}

#pablocamara .loadA2Hat2.start {
  opacity: 0;
}

#pablocamara .loadA2Hat2.end {
  opacity: 1;
}

#pablocamara .loadA2Hat3 {
  transition: opacity 1s;
  transition-timing-function: ease-out;
  transition-delay: 1.6s;
  width: 4px;
  height: 4px;
  top: 36px;
  left: 104px;
}

#pablocamara .loadA2Hat3.start {
  opacity: 0;
}

#pablocamara .loadA2Hat3.end {
  opacity: 1;
}

#pablocamara .loadA2Hat4 {
  transition: opacity 1s;
  transition-timing-function: ease-out;
  transition-delay: 1.7s;
  width: 4px;
  height: 4px;
  top: 40px;
  left: 108px;
}

#pablocamara .loadA2Hat4.start {
  opacity: 0;
}

#pablocamara .loadA2Hat4.end {
  opacity: 1;
}

#pablocamara .loadA2Hat5 {
  transition: opacity 1s;
  transition-timing-function: ease-out;
  transition-delay: 1.8s;
  width: 4px;
  height: 4px;
  top: 44px;
  left: 111px;
}

#pablocamara .loadA2Hat5.start {
  opacity: 0;
}

#pablocamara .loadA2Hat5.end {
  opacity: 1;
}
</style>
