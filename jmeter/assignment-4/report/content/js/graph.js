/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1817.0, "minX": 0.0, "maxY": 12985.0, "series": [{"data": [[0.0, 1817.0], [0.1, 1817.0], [0.2, 1817.0], [0.3, 1817.0], [0.4, 1817.0], [0.5, 1817.0], [0.6, 1817.0], [0.7, 1817.0], [0.8, 1817.0], [0.9, 1817.0], [1.0, 2016.0], [1.1, 2016.0], [1.2, 2016.0], [1.3, 2016.0], [1.4, 2016.0], [1.5, 2016.0], [1.6, 2016.0], [1.7, 2016.0], [1.8, 2016.0], [1.9, 2016.0], [2.0, 2244.0], [2.1, 2244.0], [2.2, 2244.0], [2.3, 2244.0], [2.4, 2244.0], [2.5, 2244.0], [2.6, 2244.0], [2.7, 2244.0], [2.8, 2244.0], [2.9, 2244.0], [3.0, 2672.0], [3.1, 2672.0], [3.2, 2672.0], [3.3, 2672.0], [3.4, 2672.0], [3.5, 2672.0], [3.6, 2672.0], [3.7, 2672.0], [3.8, 2672.0], [3.9, 2672.0], [4.0, 2794.0], [4.1, 2794.0], [4.2, 2794.0], [4.3, 2794.0], [4.4, 2794.0], [4.5, 2794.0], [4.6, 2794.0], [4.7, 2794.0], [4.8, 2794.0], [4.9, 2794.0], [5.0, 3182.0], [5.1, 3182.0], [5.2, 3182.0], [5.3, 3182.0], [5.4, 3182.0], [5.5, 3182.0], [5.6, 3182.0], [5.7, 3182.0], [5.8, 3182.0], [5.9, 3182.0], [6.0, 3199.0], [6.1, 3199.0], [6.2, 3199.0], [6.3, 3199.0], [6.4, 3199.0], [6.5, 3199.0], [6.6, 3199.0], [6.7, 3199.0], [6.8, 3199.0], [6.9, 3199.0], [7.0, 3202.0], [7.1, 3202.0], [7.2, 3202.0], [7.3, 3202.0], [7.4, 3202.0], [7.5, 3202.0], [7.6, 3202.0], [7.7, 3202.0], [7.8, 3202.0], [7.9, 3202.0], [8.0, 3350.0], [8.1, 3350.0], [8.2, 3350.0], [8.3, 3350.0], [8.4, 3350.0], [8.5, 3350.0], [8.6, 3350.0], [8.7, 3350.0], [8.8, 3350.0], [8.9, 3350.0], [9.0, 3505.0], [9.1, 3505.0], [9.2, 3505.0], [9.3, 3505.0], [9.4, 3505.0], [9.5, 3505.0], [9.6, 3505.0], [9.7, 3505.0], [9.8, 3505.0], [9.9, 3505.0], [10.0, 3548.0], [10.1, 3548.0], [10.2, 3548.0], [10.3, 3548.0], [10.4, 3548.0], [10.5, 3548.0], [10.6, 3548.0], [10.7, 3548.0], [10.8, 3548.0], [10.9, 3548.0], [11.0, 3685.0], [11.1, 3685.0], [11.2, 3685.0], [11.3, 3685.0], [11.4, 3685.0], [11.5, 3685.0], [11.6, 3685.0], [11.7, 3685.0], [11.8, 3685.0], [11.9, 3685.0], [12.0, 3781.0], [12.1, 3781.0], [12.2, 3781.0], [12.3, 3781.0], [12.4, 3781.0], [12.5, 3781.0], [12.6, 3781.0], [12.7, 3781.0], [12.8, 3781.0], [12.9, 3781.0], [13.0, 4018.0], [13.1, 4018.0], [13.2, 4018.0], [13.3, 4018.0], [13.4, 4018.0], [13.5, 4018.0], [13.6, 4018.0], [13.7, 4018.0], [13.8, 4018.0], [13.9, 4018.0], [14.0, 4146.0], [14.1, 4146.0], [14.2, 4146.0], [14.3, 4146.0], [14.4, 4146.0], [14.5, 4146.0], [14.6, 4146.0], [14.7, 4146.0], [14.8, 4146.0], [14.9, 4146.0], [15.0, 4185.0], [15.1, 4185.0], [15.2, 4185.0], [15.3, 4185.0], [15.4, 4185.0], [15.5, 4185.0], [15.6, 4185.0], [15.7, 4185.0], [15.8, 4185.0], [15.9, 4185.0], [16.0, 4206.0], [16.1, 4206.0], [16.2, 4206.0], [16.3, 4206.0], [16.4, 4206.0], [16.5, 4206.0], [16.6, 4206.0], [16.7, 4206.0], [16.8, 4206.0], [16.9, 4206.0], [17.0, 4223.0], [17.1, 4223.0], [17.2, 4223.0], [17.3, 4223.0], [17.4, 4223.0], [17.5, 4223.0], [17.6, 4223.0], [17.7, 4223.0], [17.8, 4223.0], [17.9, 4223.0], [18.0, 4275.0], [18.1, 4275.0], [18.2, 4275.0], [18.3, 4275.0], [18.4, 4275.0], [18.5, 4275.0], [18.6, 4275.0], [18.7, 4275.0], [18.8, 4275.0], [18.9, 4275.0], [19.0, 4328.0], [19.1, 4328.0], [19.2, 4328.0], [19.3, 4328.0], [19.4, 4328.0], [19.5, 4328.0], [19.6, 4328.0], [19.7, 4328.0], [19.8, 4328.0], [19.9, 4328.0], [20.0, 4617.0], [20.1, 4617.0], [20.2, 4617.0], [20.3, 4617.0], [20.4, 4617.0], [20.5, 4617.0], [20.6, 4617.0], [20.7, 4617.0], [20.8, 4617.0], [20.9, 4617.0], [21.0, 4673.0], [21.1, 4673.0], [21.2, 4673.0], [21.3, 4673.0], [21.4, 4673.0], [21.5, 4673.0], [21.6, 4673.0], [21.7, 4673.0], [21.8, 4673.0], [21.9, 4673.0], [22.0, 4731.0], [22.1, 4731.0], [22.2, 4731.0], [22.3, 4731.0], [22.4, 4731.0], [22.5, 4731.0], [22.6, 4731.0], [22.7, 4731.0], [22.8, 4731.0], [22.9, 4731.0], [23.0, 4824.0], [23.1, 4824.0], [23.2, 4824.0], [23.3, 4824.0], [23.4, 4824.0], [23.5, 4824.0], [23.6, 4824.0], [23.7, 4824.0], [23.8, 4824.0], [23.9, 4824.0], [24.0, 4990.0], [24.1, 4990.0], [24.2, 4990.0], [24.3, 4990.0], [24.4, 4990.0], [24.5, 4990.0], [24.6, 4990.0], [24.7, 4990.0], [24.8, 4990.0], [24.9, 4990.0], [25.0, 5022.0], [25.1, 5022.0], [25.2, 5022.0], [25.3, 5022.0], [25.4, 5022.0], [25.5, 5022.0], [25.6, 5022.0], [25.7, 5022.0], [25.8, 5022.0], [25.9, 5022.0], [26.0, 5024.0], [26.1, 5024.0], [26.2, 5024.0], [26.3, 5024.0], [26.4, 5024.0], [26.5, 5024.0], [26.6, 5024.0], [26.7, 5024.0], [26.8, 5024.0], [26.9, 5024.0], [27.0, 5135.0], [27.1, 5135.0], [27.2, 5135.0], [27.3, 5135.0], [27.4, 5135.0], [27.5, 5135.0], [27.6, 5135.0], [27.7, 5135.0], [27.8, 5135.0], [27.9, 5135.0], [28.0, 5221.0], [28.1, 5221.0], [28.2, 5221.0], [28.3, 5221.0], [28.4, 5221.0], [28.5, 5221.0], [28.6, 5221.0], [28.7, 5221.0], [28.8, 5221.0], [28.9, 5221.0], [29.0, 5249.0], [29.1, 5249.0], [29.2, 5249.0], [29.3, 5249.0], [29.4, 5249.0], [29.5, 5249.0], [29.6, 5249.0], [29.7, 5249.0], [29.8, 5249.0], [29.9, 5249.0], [30.0, 5310.0], [30.1, 5310.0], [30.2, 5310.0], [30.3, 5310.0], [30.4, 5310.0], [30.5, 5310.0], [30.6, 5310.0], [30.7, 5310.0], [30.8, 5310.0], [30.9, 5310.0], [31.0, 5422.0], [31.1, 5422.0], [31.2, 5422.0], [31.3, 5422.0], [31.4, 5422.0], [31.5, 5422.0], [31.6, 5422.0], [31.7, 5422.0], [31.8, 5422.0], [31.9, 5422.0], [32.0, 5571.0], [32.1, 5571.0], [32.2, 5571.0], [32.3, 5571.0], [32.4, 5571.0], [32.5, 5571.0], [32.6, 5571.0], [32.7, 5571.0], [32.8, 5571.0], [32.9, 5571.0], [33.0, 5614.0], [33.1, 5614.0], [33.2, 5614.0], [33.3, 5614.0], [33.4, 5614.0], [33.5, 5614.0], [33.6, 5614.0], [33.7, 5614.0], [33.8, 5614.0], [33.9, 5614.0], [34.0, 5649.0], [34.1, 5649.0], [34.2, 5649.0], [34.3, 5649.0], [34.4, 5649.0], [34.5, 5649.0], [34.6, 5649.0], [34.7, 5649.0], [34.8, 5649.0], [34.9, 5649.0], [35.0, 5846.0], [35.1, 5846.0], [35.2, 5846.0], [35.3, 5846.0], [35.4, 5846.0], [35.5, 5846.0], [35.6, 5846.0], [35.7, 5846.0], [35.8, 5846.0], [35.9, 5846.0], [36.0, 5849.0], [36.1, 5849.0], [36.2, 5849.0], [36.3, 5849.0], [36.4, 5849.0], [36.5, 5849.0], [36.6, 5849.0], [36.7, 5849.0], [36.8, 5849.0], [36.9, 5849.0], [37.0, 6041.0], [37.1, 6041.0], [37.2, 6041.0], [37.3, 6041.0], [37.4, 6041.0], [37.5, 6041.0], [37.6, 6041.0], [37.7, 6041.0], [37.8, 6041.0], [37.9, 6041.0], [38.0, 6198.0], [38.1, 6198.0], [38.2, 6198.0], [38.3, 6198.0], [38.4, 6198.0], [38.5, 6198.0], [38.6, 6198.0], [38.7, 6198.0], [38.8, 6198.0], [38.9, 6198.0], [39.0, 6222.0], [39.1, 6222.0], [39.2, 6222.0], [39.3, 6222.0], [39.4, 6222.0], [39.5, 6222.0], [39.6, 6222.0], [39.7, 6222.0], [39.8, 6222.0], [39.9, 6222.0], [40.0, 6281.0], [40.1, 6281.0], [40.2, 6281.0], [40.3, 6281.0], [40.4, 6281.0], [40.5, 6281.0], [40.6, 6281.0], [40.7, 6281.0], [40.8, 6281.0], [40.9, 6281.0], [41.0, 6307.0], [41.1, 6307.0], [41.2, 6307.0], [41.3, 6307.0], [41.4, 6307.0], [41.5, 6307.0], [41.6, 6307.0], [41.7, 6307.0], [41.8, 6307.0], [41.9, 6307.0], [42.0, 6313.0], [42.1, 6313.0], [42.2, 6313.0], [42.3, 6313.0], [42.4, 6313.0], [42.5, 6313.0], [42.6, 6313.0], [42.7, 6313.0], [42.8, 6313.0], [42.9, 6313.0], [43.0, 6328.0], [43.1, 6328.0], [43.2, 6328.0], [43.3, 6328.0], [43.4, 6328.0], [43.5, 6328.0], [43.6, 6328.0], [43.7, 6328.0], [43.8, 6328.0], [43.9, 6328.0], [44.0, 6379.0], [44.1, 6379.0], [44.2, 6379.0], [44.3, 6379.0], [44.4, 6379.0], [44.5, 6379.0], [44.6, 6379.0], [44.7, 6379.0], [44.8, 6379.0], [44.9, 6379.0], [45.0, 6444.0], [45.1, 6444.0], [45.2, 6444.0], [45.3, 6444.0], [45.4, 6444.0], [45.5, 6444.0], [45.6, 6444.0], [45.7, 6444.0], [45.8, 6444.0], [45.9, 6444.0], [46.0, 6469.0], [46.1, 6469.0], [46.2, 6469.0], [46.3, 6469.0], [46.4, 6469.0], [46.5, 6469.0], [46.6, 6469.0], [46.7, 6469.0], [46.8, 6469.0], [46.9, 6469.0], [47.0, 6485.0], [47.1, 6485.0], [47.2, 6485.0], [47.3, 6485.0], [47.4, 6485.0], [47.5, 6485.0], [47.6, 6485.0], [47.7, 6485.0], [47.8, 6485.0], [47.9, 6485.0], [48.0, 6503.0], [48.1, 6503.0], [48.2, 6503.0], [48.3, 6503.0], [48.4, 6503.0], [48.5, 6503.0], [48.6, 6503.0], [48.7, 6503.0], [48.8, 6503.0], [48.9, 6503.0], [49.0, 6598.0], [49.1, 6598.0], [49.2, 6598.0], [49.3, 6598.0], [49.4, 6598.0], [49.5, 6598.0], [49.6, 6598.0], [49.7, 6598.0], [49.8, 6598.0], [49.9, 6598.0], [50.0, 6675.0], [50.1, 6675.0], [50.2, 6675.0], [50.3, 6675.0], [50.4, 6675.0], [50.5, 6675.0], [50.6, 6675.0], [50.7, 6675.0], [50.8, 6675.0], [50.9, 6675.0], [51.0, 6817.0], [51.1, 6817.0], [51.2, 6817.0], [51.3, 6817.0], [51.4, 6817.0], [51.5, 6817.0], [51.6, 6817.0], [51.7, 6817.0], [51.8, 6817.0], [51.9, 6817.0], [52.0, 7084.0], [52.1, 7084.0], [52.2, 7084.0], [52.3, 7084.0], [52.4, 7084.0], [52.5, 7084.0], [52.6, 7084.0], [52.7, 7084.0], [52.8, 7084.0], [52.9, 7084.0], [53.0, 7180.0], [53.1, 7180.0], [53.2, 7180.0], [53.3, 7180.0], [53.4, 7180.0], [53.5, 7180.0], [53.6, 7180.0], [53.7, 7180.0], [53.8, 7180.0], [53.9, 7180.0], [54.0, 7271.0], [54.1, 7271.0], [54.2, 7271.0], [54.3, 7271.0], [54.4, 7271.0], [54.5, 7271.0], [54.6, 7271.0], [54.7, 7271.0], [54.8, 7271.0], [54.9, 7271.0], [55.0, 7553.0], [55.1, 7553.0], [55.2, 7553.0], [55.3, 7553.0], [55.4, 7553.0], [55.5, 7553.0], [55.6, 7553.0], [55.7, 7553.0], [55.8, 7553.0], [55.9, 7553.0], [56.0, 7583.0], [56.1, 7583.0], [56.2, 7583.0], [56.3, 7583.0], [56.4, 7583.0], [56.5, 7583.0], [56.6, 7583.0], [56.7, 7583.0], [56.8, 7583.0], [56.9, 7583.0], [57.0, 7590.0], [57.1, 7590.0], [57.2, 7590.0], [57.3, 7590.0], [57.4, 7590.0], [57.5, 7590.0], [57.6, 7590.0], [57.7, 7590.0], [57.8, 7590.0], [57.9, 7590.0], [58.0, 7590.0], [58.1, 7590.0], [58.2, 7590.0], [58.3, 7590.0], [58.4, 7590.0], [58.5, 7590.0], [58.6, 7590.0], [58.7, 7590.0], [58.8, 7590.0], [58.9, 7590.0], [59.0, 7601.0], [59.1, 7601.0], [59.2, 7601.0], [59.3, 7601.0], [59.4, 7601.0], [59.5, 7601.0], [59.6, 7601.0], [59.7, 7601.0], [59.8, 7601.0], [59.9, 7601.0], [60.0, 8050.0], [60.1, 8050.0], [60.2, 8050.0], [60.3, 8050.0], [60.4, 8050.0], [60.5, 8050.0], [60.6, 8050.0], [60.7, 8050.0], [60.8, 8050.0], [60.9, 8050.0], [61.0, 8133.0], [61.1, 8133.0], [61.2, 8133.0], [61.3, 8133.0], [61.4, 8133.0], [61.5, 8133.0], [61.6, 8133.0], [61.7, 8133.0], [61.8, 8133.0], [61.9, 8133.0], [62.0, 8154.0], [62.1, 8154.0], [62.2, 8154.0], [62.3, 8154.0], [62.4, 8154.0], [62.5, 8154.0], [62.6, 8154.0], [62.7, 8154.0], [62.8, 8154.0], [62.9, 8154.0], [63.0, 8242.0], [63.1, 8242.0], [63.2, 8242.0], [63.3, 8242.0], [63.4, 8242.0], [63.5, 8242.0], [63.6, 8242.0], [63.7, 8242.0], [63.8, 8242.0], [63.9, 8242.0], [64.0, 8324.0], [64.1, 8324.0], [64.2, 8324.0], [64.3, 8324.0], [64.4, 8324.0], [64.5, 8324.0], [64.6, 8324.0], [64.7, 8324.0], [64.8, 8324.0], [64.9, 8324.0], [65.0, 8327.0], [65.1, 8327.0], [65.2, 8327.0], [65.3, 8327.0], [65.4, 8327.0], [65.5, 8327.0], [65.6, 8327.0], [65.7, 8327.0], [65.8, 8327.0], [65.9, 8327.0], [66.0, 8405.0], [66.1, 8405.0], [66.2, 8405.0], [66.3, 8405.0], [66.4, 8405.0], [66.5, 8405.0], [66.6, 8405.0], [66.7, 8405.0], [66.8, 8405.0], [66.9, 8405.0], [67.0, 8533.0], [67.1, 8533.0], [67.2, 8533.0], [67.3, 8533.0], [67.4, 8533.0], [67.5, 8533.0], [67.6, 8533.0], [67.7, 8533.0], [67.8, 8533.0], [67.9, 8533.0], [68.0, 8616.0], [68.1, 8616.0], [68.2, 8616.0], [68.3, 8616.0], [68.4, 8616.0], [68.5, 8616.0], [68.6, 8616.0], [68.7, 8616.0], [68.8, 8616.0], [68.9, 8616.0], [69.0, 8627.0], [69.1, 8627.0], [69.2, 8627.0], [69.3, 8627.0], [69.4, 8627.0], [69.5, 8627.0], [69.6, 8627.0], [69.7, 8627.0], [69.8, 8627.0], [69.9, 8627.0], [70.0, 8732.0], [70.1, 8732.0], [70.2, 8732.0], [70.3, 8732.0], [70.4, 8732.0], [70.5, 8732.0], [70.6, 8732.0], [70.7, 8732.0], [70.8, 8732.0], [70.9, 8732.0], [71.0, 8732.0], [71.1, 8732.0], [71.2, 8732.0], [71.3, 8732.0], [71.4, 8732.0], [71.5, 8732.0], [71.6, 8732.0], [71.7, 8732.0], [71.8, 8732.0], [71.9, 8732.0], [72.0, 8758.0], [72.1, 8758.0], [72.2, 8758.0], [72.3, 8758.0], [72.4, 8758.0], [72.5, 8758.0], [72.6, 8758.0], [72.7, 8758.0], [72.8, 8758.0], [72.9, 8758.0], [73.0, 9079.0], [73.1, 9079.0], [73.2, 9079.0], [73.3, 9079.0], [73.4, 9079.0], [73.5, 9079.0], [73.6, 9079.0], [73.7, 9079.0], [73.8, 9079.0], [73.9, 9079.0], [74.0, 9303.0], [74.1, 9303.0], [74.2, 9303.0], [74.3, 9303.0], [74.4, 9303.0], [74.5, 9303.0], [74.6, 9303.0], [74.7, 9303.0], [74.8, 9303.0], [74.9, 9303.0], [75.0, 9310.0], [75.1, 9310.0], [75.2, 9310.0], [75.3, 9310.0], [75.4, 9310.0], [75.5, 9310.0], [75.6, 9310.0], [75.7, 9310.0], [75.8, 9310.0], [75.9, 9310.0], [76.0, 9575.0], [76.1, 9575.0], [76.2, 9575.0], [76.3, 9575.0], [76.4, 9575.0], [76.5, 9575.0], [76.6, 9575.0], [76.7, 9575.0], [76.8, 9575.0], [76.9, 9575.0], [77.0, 9585.0], [77.1, 9585.0], [77.2, 9585.0], [77.3, 9585.0], [77.4, 9585.0], [77.5, 9585.0], [77.6, 9585.0], [77.7, 9585.0], [77.8, 9585.0], [77.9, 9585.0], [78.0, 10160.0], [78.1, 10160.0], [78.2, 10160.0], [78.3, 10160.0], [78.4, 10160.0], [78.5, 10160.0], [78.6, 10160.0], [78.7, 10160.0], [78.8, 10160.0], [78.9, 10160.0], [79.0, 10227.0], [79.1, 10227.0], [79.2, 10227.0], [79.3, 10227.0], [79.4, 10227.0], [79.5, 10227.0], [79.6, 10227.0], [79.7, 10227.0], [79.8, 10227.0], [79.9, 10227.0], [80.0, 10256.0], [80.1, 10256.0], [80.2, 10256.0], [80.3, 10256.0], [80.4, 10256.0], [80.5, 10256.0], [80.6, 10256.0], [80.7, 10256.0], [80.8, 10256.0], [80.9, 10256.0], [81.0, 10311.0], [81.1, 10311.0], [81.2, 10311.0], [81.3, 10311.0], [81.4, 10311.0], [81.5, 10311.0], [81.6, 10311.0], [81.7, 10311.0], [81.8, 10311.0], [81.9, 10311.0], [82.0, 10328.0], [82.1, 10328.0], [82.2, 10328.0], [82.3, 10328.0], [82.4, 10328.0], [82.5, 10328.0], [82.6, 10328.0], [82.7, 10328.0], [82.8, 10328.0], [82.9, 10328.0], [83.0, 10525.0], [83.1, 10525.0], [83.2, 10525.0], [83.3, 10525.0], [83.4, 10525.0], [83.5, 10525.0], [83.6, 10525.0], [83.7, 10525.0], [83.8, 10525.0], [83.9, 10525.0], [84.0, 10681.0], [84.1, 10681.0], [84.2, 10681.0], [84.3, 10681.0], [84.4, 10681.0], [84.5, 10681.0], [84.6, 10681.0], [84.7, 10681.0], [84.8, 10681.0], [84.9, 10681.0], [85.0, 10752.0], [85.1, 10752.0], [85.2, 10752.0], [85.3, 10752.0], [85.4, 10752.0], [85.5, 10752.0], [85.6, 10752.0], [85.7, 10752.0], [85.8, 10752.0], [85.9, 10752.0], [86.0, 10894.0], [86.1, 10894.0], [86.2, 10894.0], [86.3, 10894.0], [86.4, 10894.0], [86.5, 10894.0], [86.6, 10894.0], [86.7, 10894.0], [86.8, 10894.0], [86.9, 10894.0], [87.0, 10956.0], [87.1, 10956.0], [87.2, 10956.0], [87.3, 10956.0], [87.4, 10956.0], [87.5, 10956.0], [87.6, 10956.0], [87.7, 10956.0], [87.8, 10956.0], [87.9, 10956.0], [88.0, 11215.0], [88.1, 11215.0], [88.2, 11215.0], [88.3, 11215.0], [88.4, 11215.0], [88.5, 11215.0], [88.6, 11215.0], [88.7, 11215.0], [88.8, 11215.0], [88.9, 11215.0], [89.0, 11252.0], [89.1, 11252.0], [89.2, 11252.0], [89.3, 11252.0], [89.4, 11252.0], [89.5, 11252.0], [89.6, 11252.0], [89.7, 11252.0], [89.8, 11252.0], [89.9, 11252.0], [90.0, 11262.0], [90.1, 11262.0], [90.2, 11262.0], [90.3, 11262.0], [90.4, 11262.0], [90.5, 11262.0], [90.6, 11262.0], [90.7, 11262.0], [90.8, 11262.0], [90.9, 11262.0], [91.0, 11577.0], [91.1, 11577.0], [91.2, 11577.0], [91.3, 11577.0], [91.4, 11577.0], [91.5, 11577.0], [91.6, 11577.0], [91.7, 11577.0], [91.8, 11577.0], [91.9, 11577.0], [92.0, 11631.0], [92.1, 11631.0], [92.2, 11631.0], [92.3, 11631.0], [92.4, 11631.0], [92.5, 11631.0], [92.6, 11631.0], [92.7, 11631.0], [92.8, 11631.0], [92.9, 11631.0], [93.0, 11789.0], [93.1, 11789.0], [93.2, 11789.0], [93.3, 11789.0], [93.4, 11789.0], [93.5, 11789.0], [93.6, 11789.0], [93.7, 11789.0], [93.8, 11789.0], [93.9, 11789.0], [94.0, 12175.0], [94.1, 12175.0], [94.2, 12175.0], [94.3, 12175.0], [94.4, 12175.0], [94.5, 12175.0], [94.6, 12175.0], [94.7, 12175.0], [94.8, 12175.0], [94.9, 12175.0], [95.0, 12214.0], [95.1, 12214.0], [95.2, 12214.0], [95.3, 12214.0], [95.4, 12214.0], [95.5, 12214.0], [95.6, 12214.0], [95.7, 12214.0], [95.8, 12214.0], [95.9, 12214.0], [96.0, 12243.0], [96.1, 12243.0], [96.2, 12243.0], [96.3, 12243.0], [96.4, 12243.0], [96.5, 12243.0], [96.6, 12243.0], [96.7, 12243.0], [96.8, 12243.0], [96.9, 12243.0], [97.0, 12273.0], [97.1, 12273.0], [97.2, 12273.0], [97.3, 12273.0], [97.4, 12273.0], [97.5, 12273.0], [97.6, 12273.0], [97.7, 12273.0], [97.8, 12273.0], [97.9, 12273.0], [98.0, 12672.0], [98.1, 12672.0], [98.2, 12672.0], [98.3, 12672.0], [98.4, 12672.0], [98.5, 12672.0], [98.6, 12672.0], [98.7, 12672.0], [98.8, 12672.0], [98.9, 12672.0], [99.0, 12985.0], [99.1, 12985.0], [99.2, 12985.0], [99.3, 12985.0], [99.4, 12985.0], [99.5, 12985.0], [99.6, 12985.0], [99.7, 12985.0], [99.8, 12985.0], [99.9, 12985.0]], "isOverall": false, "label": "Random Delay API", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1800.0, "maxY": 4.0, "series": [{"data": [[1800.0, 1.0], [2000.0, 1.0], [2200.0, 1.0], [2600.0, 1.0], [2700.0, 1.0], [3100.0, 2.0], [3200.0, 1.0], [3300.0, 1.0], [3500.0, 2.0], [3600.0, 1.0], [3700.0, 1.0], [4000.0, 1.0], [4100.0, 2.0], [4200.0, 3.0], [4300.0, 1.0], [4600.0, 2.0], [4800.0, 1.0], [4700.0, 1.0], [5000.0, 2.0], [5100.0, 1.0], [4900.0, 1.0], [5300.0, 1.0], [5200.0, 2.0], [5400.0, 1.0], [5600.0, 2.0], [5500.0, 1.0], [5800.0, 2.0], [6000.0, 1.0], [6100.0, 1.0], [6200.0, 2.0], [6300.0, 4.0], [6400.0, 3.0], [6500.0, 2.0], [6600.0, 1.0], [6800.0, 1.0], [7000.0, 1.0], [7100.0, 1.0], [7200.0, 1.0], [7500.0, 4.0], [7600.0, 1.0], [8100.0, 2.0], [8000.0, 1.0], [8600.0, 2.0], [8300.0, 2.0], [8700.0, 3.0], [8400.0, 1.0], [8200.0, 1.0], [8500.0, 1.0], [9000.0, 1.0], [9500.0, 2.0], [9300.0, 2.0], [10200.0, 2.0], [10100.0, 1.0], [10500.0, 1.0], [10700.0, 1.0], [10300.0, 2.0], [10600.0, 1.0], [10800.0, 1.0], [10900.0, 1.0], [11200.0, 3.0], [11500.0, 1.0], [11700.0, 1.0], [11600.0, 1.0], [12200.0, 3.0], [12100.0, 1.0], [12600.0, 1.0], [12900.0, 1.0]], "isOverall": false, "label": "Random Delay API", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 25.654320987654327, "minX": 1.75257942E12, "maxY": 26.47368421052632, "series": [{"data": [[1.75257942E12, 26.47368421052632], [1.75257948E12, 25.654320987654327]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75257948E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 2794.0, "minX": 1.0, "maxY": 12214.0, "series": [{"data": [[32.0, 7384.4], [33.0, 6691.0], [2.0, 12214.0], [34.0, 6391.941176470588], [35.0, 4714.0], [36.0, 8611.6], [37.0, 8133.0], [3.0, 8242.0], [4.0, 9310.0], [5.0, 9575.0], [6.0, 7180.0], [7.0, 10311.0], [8.0, 8758.0], [9.0, 7553.0], [10.0, 7590.0], [11.0, 7790.0], [12.0, 6866.0], [13.0, 8771.5], [14.0, 11262.0], [15.0, 6744.0], [16.0, 2794.0], [1.0, 8533.0], [17.0, 7824.5], [18.0, 4999.5], [19.0, 6968.333333333333], [20.0, 5649.0], [21.0, 3781.0], [22.0, 4990.0], [23.0, 8404.666666666666], [24.0, 6957.666666666667], [25.0, 8713.0], [26.0, 6281.0], [27.0, 5721.0], [28.0, 9585.0], [29.0, 7330.375], [30.0, 7462.5], [31.0, 7984.333333333333]], "isOverall": false, "label": "Random Delay API", "isController": false}, {"data": [[25.810000000000002, 7174.9800000000005]], "isOverall": false, "label": "Random Delay API-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 37.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 38.016666666666666, "minX": 1.75257942E12, "maxY": 726.5, "series": [{"data": [[1.75257942E12, 170.38333333333333], [1.75257948E12, 726.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75257942E12, 38.016666666666666], [1.75257948E12, 162.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75257948E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 6596.315789473684, "minX": 1.75257942E12, "maxY": 7310.716049382714, "series": [{"data": [[1.75257942E12, 6596.315789473684], [1.75257948E12, 7310.716049382714]], "isOverall": false, "label": "Random Delay API", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75257948E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 6595.736842105263, "minX": 1.75257942E12, "maxY": 7310.679012345677, "series": [{"data": [[1.75257942E12, 6595.736842105263], [1.75257948E12, 7310.679012345677]], "isOverall": false, "label": "Random Delay API", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75257948E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 387.8024691358025, "minX": 1.75257942E12, "maxY": 844.3157894736842, "series": [{"data": [[1.75257942E12, 844.3157894736842], [1.75257948E12, 387.8024691358025]], "isOverall": false, "label": "Random Delay API", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75257948E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1817.0, "minX": 1.75257942E12, "maxY": 12985.0, "series": [{"data": [[1.75257942E12, 12243.0], [1.75257948E12, 12985.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75257942E12, 2672.0], [1.75257948E12, 1817.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75257942E12, 10256.0], [1.75257948E12, 11514.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75257942E12, 12243.0], [1.75257948E12, 12985.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75257942E12, 6485.0], [1.75257948E12, 6675.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75257942E12, 12243.0], [1.75257948E12, 12210.1]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75257948E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 4824.0, "minX": 1.0, "maxY": 8580.0, "series": [{"data": [[1.0, 8580.0], [2.0, 5398.5], [4.0, 8091.5], [8.0, 7052.0], [5.0, 6444.0], [3.0, 4824.0], [6.0, 4963.5], [7.0, 5610.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 4824.0, "minX": 1.0, "maxY": 8579.5, "series": [{"data": [[1.0, 8579.5], [2.0, 5398.5], [4.0, 8091.0], [8.0, 7052.0], [5.0, 6444.0], [3.0, 4824.0], [6.0, 4963.0], [7.0, 5610.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.8, "minX": 1.75257942E12, "maxY": 0.8666666666666667, "series": [{"data": [[1.75257942E12, 0.8666666666666667], [1.75257948E12, 0.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75257948E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.75257942E12, "maxY": 1.35, "series": [{"data": [[1.75257942E12, 0.31666666666666665], [1.75257948E12, 1.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75257948E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.75257942E12, "maxY": 1.35, "series": [{"data": [[1.75257942E12, 0.31666666666666665], [1.75257948E12, 1.35]], "isOverall": false, "label": "Random Delay API-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75257948E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.75257942E12, "maxY": 1.35, "series": [{"data": [[1.75257942E12, 0.31666666666666665], [1.75257948E12, 1.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75257948E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 20700000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

