function locomotive() {
      gsap.registerPlugin(ScrollTrigger);

      const locoScroll = new LocomotiveScroll({
            el: document.querySelector(".main"),
            smooth: true,
      });
      locoScroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(".main", {
            scrollTop(value) {
                  return arguments.length
                        ? locoScroll.scrollTo(value, 0, 0)
                        : locoScroll.scroll.instance.scroll.y;
            },

            getBoundingClientRect() {
                  return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight,
                  };
            },

            pinType: document.querySelector(".main").style.transform
                  ? "transform"
                  : "fixed",
      });
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
});

function files(index) {
      var data = `
            ./assets/canvas/photo(1).png
            ./assets/canvas/photo(2).png
            ./assets/canvas/photo(3).png
            ./assets/canvas/photo(4).png
            ./assets/canvas/photo(5).png
            ./assets/canvas/photo(6).png
            ./assets/canvas/photo(7).png
            ./assets/canvas/photo(8).png
            ./assets/canvas/photo(9).png
            ./assets/canvas/photo(10).png
            ./assets/canvas/photo(11).png
            ./assets/canvas/photo(12).png
            ./assets/canvas/photo(13).png
            ./assets/canvas/photo(14).png
            ./assets/canvas/photo(15).png
            ./assets/canvas/photo(16).png
            ./assets/canvas/photo(17).png
            ./assets/canvas/photo(18).png
            ./assets/canvas/photo(19).png
            ./assets/canvas/photo(20).png
            ./assets/canvas/photo(21).png
            ./assets/canvas/photo(22).png
            ./assets/canvas/photo(23).png
            ./assets/canvas/photo(24).png
            ./assets/canvas/photo(25).png
            ./assets/canvas/photo(26).png
            ./assets/canvas/photo(27).png
            ./assets/canvas/photo(28).png
            ./assets/canvas/photo(29).png
            ./assets/canvas/photo(30).png
            ./assets/canvas/photo(31).png
            ./assets/canvas/photo(32).png
            ./assets/canvas/photo(33).png
            ./assets/canvas/photo(34).png
            ./assets/canvas/photo(35).png
            ./assets/canvas/photo(36).png
            ./assets/canvas/photo(37).png
            ./assets/canvas/photo(38).png
            ./assets/canvas/photo(39).png
            ./assets/canvas/photo(40).png
            ./assets/canvas/photo(41).png
            ./assets/canvas/photo(42).png
            ./assets/canvas/photo(43).png
            ./assets/canvas/photo(44).png
            ./assets/canvas/photo(45).png
            ./assets/canvas/photo(46).png
            ./assets/canvas/photo(47).png
            ./assets/canvas/photo(48).png
            ./assets/canvas/photo(49).png
            ./assets/canvas/photo(50).png
            ./assets/canvas/photo(51).png
            ./assets/canvas/photo(52).png
            ./assets/canvas/photo(53).png
            ./assets/canvas/photo(54).png
            ./assets/canvas/photo(55).png
            ./assets/canvas/photo(56).png
            ./assets/canvas/photo(57).png
            ./assets/canvas/photo(58).png
            ./assets/canvas/photo(59).png
            ./assets/canvas/photo(60).png
            ./assets/canvas/photo(61).png
            ./assets/canvas/photo(62).png
            ./assets/canvas/photo(63).png
            ./assets/canvas/photo(64).png
            ./assets/canvas/photo(65).png
            ./assets/canvas/photo(66).png
            ./assets/canvas/photo(67).png
            ./assets/canvas/photo(68).png
            ./assets/canvas/photo(69).png
            ./assets/canvas/photo(70).png
            ./assets/canvas/photo(71).png
            ./assets/canvas/photo(72).png
            ./assets/canvas/photo(73).png
            ./assets/canvas/photo(74).png
            ./assets/canvas/photo(75).png
            ./assets/canvas/photo(76).png
            ./assets/canvas/photo(77).png
            ./assets/canvas/photo(78).png
            ./assets/canvas/photo(79).png
            ./assets/canvas/photo(80).png
            ./assets/canvas/photo(81).png
            ./assets/canvas/photo(82).png
            ./assets/canvas/photo(83).png
            ./assets/canvas/photo(84).png
            ./assets/canvas/photo(85).png
            ./assets/canvas/photo(86).png
            ./assets/canvas/photo(87).png
            ./assets/canvas/photo(88).png
            ./assets/canvas/photo(89).png
            ./assets/canvas/photo(90).png
            ./assets/canvas/photo(91).png
            ./assets/canvas/photo(92).png
            ./assets/canvas/photo(93).png
            ./assets/canvas/photo(94).png
            ./assets/canvas/photo(95).png
            ./assets/canvas/photo(96).png
            ./assets/canvas/photo(97).png
            ./assets/canvas/photo(98).png
            ./assets/canvas/photo(99).png
            ./assets/canvas/photo(100).png
            ./assets/canvas/photo(101).png
            ./assets/canvas/photo(102).png
            ./assets/canvas/photo(103).png
            ./assets/canvas/photo(104).png
            ./assets/canvas/photo(105).png
            ./assets/canvas/photo(106).png
            ./assets/canvas/photo(107).png
            ./assets/canvas/photo(108).png
            ./assets/canvas/photo(109).png
            ./assets/canvas/photo(110).png
            ./assets/canvas/photo(111).png
            ./assets/canvas/photo(112).png
            ./assets/canvas/photo(113).png
            ./assets/canvas/photo(114).png
            ./assets/canvas/photo(115).png
            ./assets/canvas/photo(116).png
            ./assets/canvas/photo(117).png
            ./assets/canvas/photo(118).png
            ./assets/canvas/photo(119).png
            ./assets/canvas/photo(120).png
            ./assets/canvas/photo(121).png
            ./assets/canvas/photo(122).png
            ./assets/canvas/photo(123).png
            ./assets/canvas/photo(124).png
            ./assets/canvas/photo(125).png
            ./assets/canvas/photo(126).png
            ./assets/canvas/photo(127).png
            ./assets/canvas/photo(128).png
            ./assets/canvas/photo(129).png
            ./assets/canvas/photo(130).png
            ./assets/canvas/photo(131).png
            ./assets/canvas/photo(132).png
            ./assets/canvas/photo(133).png
            ./assets/canvas/photo(134).png
            ./assets/canvas/photo(135).png
            ./assets/canvas/photo(136).png
            ./assets/canvas/photo(137).png
            ./assets/canvas/photo(138).png
            ./assets/canvas/photo(139).png
            ./assets/canvas/photo(140).png
            ./assets/canvas/photo(141).png
            ./assets/canvas/photo(142).png
            ./assets/canvas/photo(143).png
            ./assets/canvas/photo(144).png
            ./assets/canvas/photo(145).png
            ./assets/canvas/photo(146).png
            ./assets/canvas/photo(147).png
            ./assets/canvas/photo(148).png
            ./assets/canvas/photo(149).png
            ./assets/canvas/photo(150).png
            ./assets/canvas/photo(151).png
            ./assets/canvas/photo(152).png
            ./assets/canvas/photo(153).png
            ./assets/canvas/photo(154).png
            ./assets/canvas/photo(155).png
            ./assets/canvas/photo(156).png
            ./assets/canvas/photo(157).png
            ./assets/canvas/photo(158).png
            ./assets/canvas/photo(159).png
            ./assets/canvas/photo(160).png
            ./assets/canvas/photo(161).png
            ./assets/canvas/photo(162).png
            ./assets/canvas/photo(163).png
            ./assets/canvas/photo(164).png
            ./assets/canvas/photo(165).png
            ./assets/canvas/photo(166).png
            ./assets/canvas/photo(167).png
            ./assets/canvas/photo(168).png
            ./assets/canvas/photo(169).png
            ./assets/canvas/photo(170).png
            ./assets/canvas/photo(171).png
            ./assets/canvas/photo(172).png
            ./assets/canvas/photo(173).png
            ./assets/canvas/photo(174).png
            ./assets/canvas/photo(175).png
            ./assets/canvas/photo(176).png
            ./assets/canvas/photo(177).png
            ./assets/canvas/photo(178).png
            ./assets/canvas/photo(179).png
            ./assets/canvas/photo(180).png
            ./assets/canvas/photo(181).png
            ./assets/canvas/photo(182).png
            ./assets/canvas/photo(183).png
            ./assets/canvas/photo(184).png
            ./assets/canvas/photo(185).png
            ./assets/canvas/photo(186).png
            ./assets/canvas/photo(187).png
            ./assets/canvas/photo(188).png
            ./assets/canvas/photo(189).png
            ./assets/canvas/photo(190).png
            ./assets/canvas/photo(191).png
            ./assets/canvas/photo(192).png
            ./assets/canvas/photo(193).png
            ./assets/canvas/photo(194).png
            ./assets/canvas/photo(195).png
            ./assets/canvas/photo(196).png
            ./assets/canvas/photo(197).png
            ./assets/canvas/photo(198).png
            ./assets/canvas/photo(199).png
            ./assets/canvas/photo(200).png
            ./assets/canvas/photo(201).png
            ./assets/canvas/photo(202).png
            ./assets/canvas/photo(203).png
            ./assets/canvas/photo(204).png
            ./assets/canvas/photo(205).png
            ./assets/canvas/photo(206).png
            ./assets/canvas/photo(207).png
            ./assets/canvas/photo(208).png
            ./assets/canvas/photo(209).png
            ./assets/canvas/photo(210).png
            ./assets/canvas/photo(211).png
            ./assets/canvas/photo(212).png
            ./assets/canvas/photo(213).png
            ./assets/canvas/photo(214).png
            ./assets/canvas/photo(215).png
            ./assets/canvas/photo(216).png
            ./assets/canvas/photo(217).png
            ./assets/canvas/photo(218).png
            ./assets/canvas/photo(219).png
            ./assets/canvas/photo(220).png
            ./assets/canvas/photo(221).png
            ./assets/canvas/photo(222).png
            ./assets/canvas/photo(223).png
            ./assets/canvas/photo(224).png
            ./assets/canvas/photo(225).png
            ./assets/canvas/photo(226).png
            ./assets/canvas/photo(227).png
            ./assets/canvas/photo(228).png
            ./assets/canvas/photo(229).png
            ./assets/canvas/photo(230).png
            ./assets/canvas/photo(231).png
            ./assets/canvas/photo(232).png
            ./assets/canvas/photo(233).png
            ./assets/canvas/photo(234).png
            ./assets/canvas/photo(235).png
            ./assets/canvas/photo(236).png
            ./assets/canvas/photo(237).png
            ./assets/canvas/photo(238).png
            ./assets/canvas/photo(239).png
            ./assets/canvas/photo(240).png
            ./assets/canvas/photo(241).png
            ./assets/canvas/photo(242).png
            ./assets/canvas/photo(243).png
            ./assets/canvas/photo(244).png
            ./assets/canvas/photo(245).png
            ./assets/canvas/photo(246).png
            ./assets/canvas/photo(247).png
            ./assets/canvas/photo(248).png
            ./assets/canvas/photo(249).png
            ./assets/canvas/photo(250).png
            ./assets/canvas/photo(251).png
            ./assets/canvas/photo(252).png
            ./assets/canvas/photo(253).png
            ./assets/canvas/photo(254).png
            ./assets/canvas/photo(255).png
            ./assets/canvas/photo(256).png
            ./assets/canvas/photo(257).png
            ./assets/canvas/photo(258).png
            ./assets/canvas/photo(259).png
            ./assets/canvas/photo(260).png
            ./assets/canvas/photo(261).png
            ./assets/canvas/photo(262).png
            ./assets/canvas/photo(263).png
            ./assets/canvas/photo(264).png
            ./assets/canvas/photo(265).png
            ./assets/canvas/photo(266).png
            ./assets/canvas/photo(267).png
            ./assets/canvas/photo(268).png
            ./assets/canvas/photo(269).png
            ./assets/canvas/photo(270).png
            ./assets/canvas/photo(271).png
            ./assets/canvas/photo(272).png
            ./assets/canvas/photo(273).png
            ./assets/canvas/photo(274).png
            ./assets/canvas/photo(275).png
            ./assets/canvas/photo(276).png
            ./assets/canvas/photo(277).png
            ./assets/canvas/photo(278).png
            ./assets/canvas/photo(279).png
            ./assets/canvas/photo(280).png
            ./assets/canvas/photo(281).png
            ./assets/canvas/photo(282).png
            ./assets/canvas/photo(283).png
            ./assets/canvas/photo(284).png
            ./assets/canvas/photo(285).png
            ./assets/canvas/photo(286).png
            ./assets/canvas/photo(287).png
            ./assets/canvas/photo(288).png
            ./assets/canvas/photo(289).png
            ./assets/canvas/photo(290).png
            ./assets/canvas/photo(291).png
            ./assets/canvas/photo(292).png
            ./assets/canvas/photo(293).png
            ./assets/canvas/photo(294).png
            ./assets/canvas/photo(295).png
            ./assets/canvas/photo(296).png
            ./assets/canvas/photo(297).png
            ./assets/canvas/photo(298).png
            ./assets/canvas/photo(299).png
            ./assets/canvas/photo(300).png
      `;
      return data.split("\n")[index];
}


const frameCount = 300;

const images = [];
const imageSeq = {
      frame: 1,
};

for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
}

gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
            scrub: 0.15,
            trigger: `.page1>canvas`,
            start: `top top`,
            end: `600% top`,
            scroller: `.main`,
      },
      onUpdate: render,
});

images[1].onload = render;

function render() {
      scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
      );
}
ScrollTrigger.create({
      trigger: ".page1>canvas",
      pin: true,
      // markers:true,
      scroller: `.main`,
      start: `top top`,
      end: `600% top`,
});



gsap.to(".page2", {
      scrollTrigger: {
            trigger: `.page2`,
            start: `top top`,
            end: `bottom top`,
            pin: true,
            scroller: `.main`
      }
})
gsap.to(".page3", {
      scrollTrigger: {
            trigger: `.page3`,
            start: `top top`,
            end: `bottom top`,
            pin: true,
            scroller: `.main`
      }
})
gsap.to(".page4", {
      scrollTrigger: {
            trigger: `.page4`,
            start: `top top`,
            end: `bottom top`,
            pin: true,
            scroller: `.main`
      }
})