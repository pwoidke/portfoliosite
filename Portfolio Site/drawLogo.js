    function init() {



      var canvas = document.getElementById("canvas");

      var ctx = canvas.getContext("2d");



      draw(ctx);

    }



    function draw(ctx) {



      // layer1/Path

      ctx.save();

      ctx.beginPath();

      ctx.moveTo(314.2, 155.0);

      ctx.lineTo(0.0, 155.0);

      ctx.lineTo(0.0, 0.0);

      ctx.lineTo(314.2, 0.0);

      ctx.lineTo(314.2, 155.0);

      ctx.closePath();

      ctx.fillStyle = "rgb(50, 50, 50)";

      ctx.fill();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(311.0, 75.9);

      ctx.bezierCurveTo(307.6, 77.2, 303.4, 79.3, 300.8, 81.6);

      ctx.lineTo(302.9, 75.9);

      ctx.lineTo(300.8, 70.2);

      ctx.bezierCurveTo(303.4, 72.5, 307.6, 74.6, 311.0, 75.9);

      ctx.fillStyle = "rgb(247, 152, 55)";

      ctx.fill();

      ctx.strokeStyle = "rgb(247, 152, 55)";

      ctx.lineJoin = "miter";

      ctx.miterLimit = 4.0;

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(219.1, 142.2);

      ctx.lineTo(219.1, 7.2);

      ctx.bezierCurveTo(219.1, 53.0, 206.8, 72.1, 194.5, 72.1);

      ctx.bezierCurveTo(182.2, 72.1, 169.8, 53.0, 169.8, 7.2);

      ctx.lineTo(169.8, 146.5);

      ctx.lineWidth = 5.0;

      ctx.lineJoin = "round";

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(219.1, 149.3);

      ctx.bezierCurveTo(220.4, 146.0, 222.5, 141.8, 224.8, 139.2);

      ctx.lineTo(219.1, 141.2);

      ctx.lineTo(213.5, 139.2);

      ctx.bezierCurveTo(215.7, 141.8, 217.9, 146.0, 219.1, 149.3);

      ctx.fill();

      ctx.lineWidth = 1.0;

      ctx.lineJoin = "miter";

      ctx.miterLimit = 4.0;

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(219.1, 110.3);

      ctx.lineTo(266.8, 144.6);

      ctx.lineTo(303.8, 144.6);

      ctx.lineWidth = 5.0;

      ctx.lineJoin = "round";

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(311.0, 144.6);

      ctx.bezierCurveTo(307.6, 145.8, 303.4, 148.0, 300.8, 150.2);

      ctx.lineTo(302.9, 144.6);

      ctx.lineTo(300.8, 138.9);

      ctx.bezierCurveTo(303.4, 141.2, 307.6, 143.3, 311.0, 144.6);

      ctx.fill();

      ctx.lineWidth = 1.0;

      ctx.lineJoin = "miter";

      ctx.miterLimit = 4.0;

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(266.8, 14.4);

      ctx.lineTo(266.8, 143.6);

      ctx.lineWidth = 5.0;

      ctx.lineJoin = "round";

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(266.8, 7.2);

      ctx.bezierCurveTo(265.6, 10.6, 263.4, 14.8, 261.2, 17.4);

      ctx.lineTo(266.8, 15.4);

      ctx.lineTo(272.5, 17.4);

      ctx.bezierCurveTo(270.2, 14.8, 268.1, 10.6, 266.8, 7.2);

      ctx.fill();

      ctx.lineWidth = 1.0;

      ctx.lineJoin = "miter";

      ctx.miterLimit = 4.0;

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(266.8, 110.2);

      ctx.lineTo(295.2, 110.2);

      ctx.lineWidth = 5.0;

      ctx.lineJoin = "round";

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(302.4, 110.2);

      ctx.bezierCurveTo(299.0, 111.5, 294.8, 113.6, 292.2, 115.9);

      ctx.lineTo(294.3, 110.2);

      ctx.lineTo(292.2, 104.6);

      ctx.bezierCurveTo(294.8, 106.8, 299.0, 109.0, 302.4, 110.2);

      ctx.fill();

      ctx.lineWidth = 1.0;

      ctx.lineJoin = "miter";

      ctx.miterLimit = 4.0;

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(142.8, 142.2);

      ctx.lineTo(142.8, 75.9);

      ctx.lineTo(108.8, 7.2);

      ctx.lineTo(40.1, 144.6);

      ctx.lineTo(31.2, 110.6);

      ctx.lineTo(5.5, 144.6);

      ctx.lineTo(5.5, 31.1);

      ctx.lineWidth = 5.0;

      ctx.lineJoin = "round";

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(142.8, 149.3);

      ctx.bezierCurveTo(144.1, 146.0, 146.2, 141.8, 148.5, 139.2);

      ctx.lineTo(142.8, 141.2);

      ctx.lineTo(137.2, 139.2);

      ctx.bezierCurveTo(139.4, 141.8, 141.6, 146.0, 142.8, 149.3);

      ctx.fill();

      ctx.lineWidth = 1.0;

      ctx.lineJoin = "miter";

      ctx.miterLimit = 4.0;

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(96.0, 41.4);

      ctx.lineTo(115.7, 41.4);

      ctx.lineWidth = 5.0;

      ctx.lineCap = "square";

      ctx.lineJoin = "round";

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(122.9, 41.4);

      ctx.bezierCurveTo(119.5, 42.7, 115.3, 44.8, 112.7, 47.1);

      ctx.lineTo(114.7, 41.4);

      ctx.lineTo(112.7, 35.7);

      ctx.bezierCurveTo(115.3, 38.0, 119.5, 40.2, 122.9, 41.4);

      ctx.fill();

      ctx.lineWidth = 1.0;

      ctx.lineCap = "butt";

      ctx.lineJoin = "miter";

      ctx.miterLimit = 4.0;

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(129.4, 110.2);

      ctx.bezierCurveTo(129.4, 124.5, 117.9, 136.0, 103.7, 136.0);

      ctx.bezierCurveTo(89.5, 136.0, 77.9, 124.5, 77.9, 110.2);

      ctx.bezierCurveTo(77.9, 96.0, 89.5, 84.5, 103.7, 84.5);

      ctx.bezierCurveTo(115.4, 84.5, 125.3, 92.4, 128.4, 103.1);

      ctx.lineWidth = 5.0;

      ctx.lineJoin = "round";

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(129.4, 110.2);

      ctx.bezierCurveTo(127.7, 107.1, 124.9, 103.3, 122.3, 101.0);

      ctx.lineTo(128.2, 102.2);

      ctx.lineTo(133.5, 99.3);

      ctx.bezierCurveTo(131.6, 102.2, 130.2, 106.7, 129.4, 110.2);

      ctx.fill();

      ctx.lineWidth = 1.0;

      ctx.lineJoin = "miter";

      ctx.miterLimit = 4.0;

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(5.5, 32.0);

      ctx.bezierCurveTo(5.5, 17.8, 17.0, 6.3, 31.2, 6.3);

      ctx.bezierCurveTo(45.4, 6.3, 57.0, 17.8, 57.0, 32.0);

      ctx.bezierCurveTo(57.0, 46.2, 45.4, 57.8, 31.2, 57.8);

      ctx.bezierCurveTo(27.3, 57.8, 23.5, 56.9, 20.2, 55.3);

      ctx.lineWidth = 5.0;

      ctx.lineJoin = "round";

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(14.2, 51.3);

      ctx.bezierCurveTo(17.7, 52.1, 22.4, 52.5, 25.8, 52.0);

      ctx.lineTo(21.0, 55.7);

      ctx.lineTo(19.7, 61.6);

      ctx.bezierCurveTo(18.7, 58.3, 16.4, 54.2, 14.2, 51.3);

      ctx.fill();

      ctx.lineWidth = 1.0;

      ctx.lineJoin = "miter";

      ctx.miterLimit = 4.0;

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(179.6, 80.6);

      ctx.bezierCurveTo(202.1, 82.9, 216.6, 96.5, 216.6, 113.8);

      ctx.bezierCurveTo(216.6, 130.4, 194.1, 144.6, 167.6, 144.6);

      ctx.lineWidth = 5.0;

      ctx.lineJoin = "round";

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(172.4, 80.2);

      ctx.bezierCurveTo(175.7, 81.7, 179.8, 84.1, 182.2, 86.5);

      ctx.lineTo(180.5, 80.7);

      ctx.lineTo(182.9, 75.2);

      ctx.bezierCurveTo(180.2, 77.3, 175.8, 79.1, 172.4, 80.2);

      ctx.fill();

      ctx.lineWidth = 1.0;

      ctx.lineJoin = "miter";

      ctx.miterLimit = 4.0;

      ctx.stroke();



      // layer1/Path

      ctx.beginPath();

      ctx.moveTo(219.1, 109.7);

      ctx.lineTo(266.8, 75.9);

      ctx.lineTo(303.8, 75.9);

      ctx.lineWidth = 5.0;

      ctx.lineJoin = "round";

      ctx.stroke();

      ctx.restore();

    }
