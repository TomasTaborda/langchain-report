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
        data: {"result": {"minY": 17112.0, "minX": 0.0, "maxY": 516803.0, "series": [{"data": [[0.0, 17112.0], [0.1, 17112.0], [0.2, 17112.0], [0.3, 17112.0], [0.4, 17112.0], [0.5, 17112.0], [0.6, 17112.0], [0.7, 17112.0], [0.8, 17112.0], [0.9, 17112.0], [1.0, 17112.0], [1.1, 17112.0], [1.2, 17112.0], [1.3, 17112.0], [1.4, 17112.0], [1.5, 17112.0], [1.6, 17112.0], [1.7, 17112.0], [1.8, 17112.0], [1.9, 17112.0], [2.0, 29212.0], [2.1, 29212.0], [2.2, 29212.0], [2.3, 29212.0], [2.4, 29212.0], [2.5, 29212.0], [2.6, 29212.0], [2.7, 29212.0], [2.8, 29212.0], [2.9, 29212.0], [3.0, 29212.0], [3.1, 29212.0], [3.2, 29212.0], [3.3, 29212.0], [3.4, 29212.0], [3.5, 29212.0], [3.6, 29212.0], [3.7, 29212.0], [3.8, 29212.0], [3.9, 29212.0], [4.0, 41149.0], [4.1, 41149.0], [4.2, 41149.0], [4.3, 41149.0], [4.4, 41149.0], [4.5, 41149.0], [4.6, 41149.0], [4.7, 41149.0], [4.8, 41149.0], [4.9, 41149.0], [5.0, 41149.0], [5.1, 41149.0], [5.2, 41149.0], [5.3, 41149.0], [5.4, 41149.0], [5.5, 41149.0], [5.6, 41149.0], [5.7, 41149.0], [5.8, 41149.0], [5.9, 41149.0], [6.0, 52880.0], [6.1, 52880.0], [6.2, 52880.0], [6.3, 52880.0], [6.4, 52880.0], [6.5, 52880.0], [6.6, 52880.0], [6.7, 52880.0], [6.8, 52880.0], [6.9, 52880.0], [7.0, 52880.0], [7.1, 52880.0], [7.2, 52880.0], [7.3, 52880.0], [7.4, 52880.0], [7.5, 52880.0], [7.6, 52880.0], [7.7, 52880.0], [7.8, 52880.0], [7.9, 52880.0], [8.0, 64936.0], [8.1, 64936.0], [8.2, 64936.0], [8.3, 64936.0], [8.4, 64936.0], [8.5, 64936.0], [8.6, 64936.0], [8.7, 64936.0], [8.8, 64936.0], [8.9, 64936.0], [9.0, 64936.0], [9.1, 64936.0], [9.2, 64936.0], [9.3, 64936.0], [9.4, 64936.0], [9.5, 64936.0], [9.6, 64936.0], [9.7, 64936.0], [9.8, 64936.0], [9.9, 64936.0], [10.0, 75321.0], [10.1, 75321.0], [10.2, 75321.0], [10.3, 75321.0], [10.4, 75321.0], [10.5, 75321.0], [10.6, 75321.0], [10.7, 75321.0], [10.8, 75321.0], [10.9, 75321.0], [11.0, 75321.0], [11.1, 75321.0], [11.2, 75321.0], [11.3, 75321.0], [11.4, 75321.0], [11.5, 75321.0], [11.6, 75321.0], [11.7, 75321.0], [11.8, 75321.0], [11.9, 75321.0], [12.0, 83800.0], [12.1, 83800.0], [12.2, 83800.0], [12.3, 83800.0], [12.4, 83800.0], [12.5, 83800.0], [12.6, 83800.0], [12.7, 83800.0], [12.8, 83800.0], [12.9, 83800.0], [13.0, 83800.0], [13.1, 83800.0], [13.2, 83800.0], [13.3, 83800.0], [13.4, 83800.0], [13.5, 83800.0], [13.6, 83800.0], [13.7, 83800.0], [13.8, 83800.0], [13.9, 83800.0], [14.0, 97222.0], [14.1, 97222.0], [14.2, 97222.0], [14.3, 97222.0], [14.4, 97222.0], [14.5, 97222.0], [14.6, 97222.0], [14.7, 97222.0], [14.8, 97222.0], [14.9, 97222.0], [15.0, 97222.0], [15.1, 97222.0], [15.2, 97222.0], [15.3, 97222.0], [15.4, 97222.0], [15.5, 97222.0], [15.6, 97222.0], [15.7, 97222.0], [15.8, 97222.0], [15.9, 97222.0], [16.0, 105522.0], [16.1, 105522.0], [16.2, 105522.0], [16.3, 105522.0], [16.4, 105522.0], [16.5, 105522.0], [16.6, 105522.0], [16.7, 105522.0], [16.8, 105522.0], [16.9, 105522.0], [17.0, 105522.0], [17.1, 105522.0], [17.2, 105522.0], [17.3, 105522.0], [17.4, 105522.0], [17.5, 105522.0], [17.6, 105522.0], [17.7, 105522.0], [17.8, 105522.0], [17.9, 105522.0], [18.0, 114166.0], [18.1, 114166.0], [18.2, 114166.0], [18.3, 114166.0], [18.4, 114166.0], [18.5, 114166.0], [18.6, 114166.0], [18.7, 114166.0], [18.8, 114166.0], [18.9, 114166.0], [19.0, 114166.0], [19.1, 114166.0], [19.2, 114166.0], [19.3, 114166.0], [19.4, 114166.0], [19.5, 114166.0], [19.6, 114166.0], [19.7, 114166.0], [19.8, 114166.0], [19.9, 114166.0], [20.0, 122116.0], [20.1, 122116.0], [20.2, 122116.0], [20.3, 122116.0], [20.4, 122116.0], [20.5, 122116.0], [20.6, 122116.0], [20.7, 122116.0], [20.8, 122116.0], [20.9, 122116.0], [21.0, 122116.0], [21.1, 122116.0], [21.2, 122116.0], [21.3, 122116.0], [21.4, 122116.0], [21.5, 122116.0], [21.6, 122116.0], [21.7, 122116.0], [21.8, 122116.0], [21.9, 122116.0], [22.0, 135091.0], [22.1, 135091.0], [22.2, 135091.0], [22.3, 135091.0], [22.4, 135091.0], [22.5, 135091.0], [22.6, 135091.0], [22.7, 135091.0], [22.8, 135091.0], [22.9, 135091.0], [23.0, 135091.0], [23.1, 135091.0], [23.2, 135091.0], [23.3, 135091.0], [23.4, 135091.0], [23.5, 135091.0], [23.6, 135091.0], [23.7, 135091.0], [23.8, 135091.0], [23.9, 135091.0], [24.0, 149426.0], [24.1, 149426.0], [24.2, 149426.0], [24.3, 149426.0], [24.4, 149426.0], [24.5, 149426.0], [24.6, 149426.0], [24.7, 149426.0], [24.8, 149426.0], [24.9, 149426.0], [25.0, 149426.0], [25.1, 149426.0], [25.2, 149426.0], [25.3, 149426.0], [25.4, 149426.0], [25.5, 149426.0], [25.6, 149426.0], [25.7, 149426.0], [25.8, 149426.0], [25.9, 149426.0], [26.0, 160478.0], [26.1, 160478.0], [26.2, 160478.0], [26.3, 160478.0], [26.4, 160478.0], [26.5, 160478.0], [26.6, 160478.0], [26.7, 160478.0], [26.8, 160478.0], [26.9, 160478.0], [27.0, 160478.0], [27.1, 160478.0], [27.2, 160478.0], [27.3, 160478.0], [27.4, 160478.0], [27.5, 160478.0], [27.6, 160478.0], [27.7, 160478.0], [27.8, 160478.0], [27.9, 160478.0], [28.0, 171648.0], [28.1, 171648.0], [28.2, 171648.0], [28.3, 171648.0], [28.4, 171648.0], [28.5, 171648.0], [28.6, 171648.0], [28.7, 171648.0], [28.8, 171648.0], [28.9, 171648.0], [29.0, 171648.0], [29.1, 171648.0], [29.2, 171648.0], [29.3, 171648.0], [29.4, 171648.0], [29.5, 171648.0], [29.6, 171648.0], [29.7, 171648.0], [29.8, 171648.0], [29.9, 171648.0], [30.0, 180501.0], [30.1, 180501.0], [30.2, 180501.0], [30.3, 180501.0], [30.4, 180501.0], [30.5, 180501.0], [30.6, 180501.0], [30.7, 180501.0], [30.8, 180501.0], [30.9, 180501.0], [31.0, 180501.0], [31.1, 180501.0], [31.2, 180501.0], [31.3, 180501.0], [31.4, 180501.0], [31.5, 180501.0], [31.6, 180501.0], [31.7, 180501.0], [31.8, 180501.0], [31.9, 180501.0], [32.0, 188753.0], [32.1, 188753.0], [32.2, 188753.0], [32.3, 188753.0], [32.4, 188753.0], [32.5, 188753.0], [32.6, 188753.0], [32.7, 188753.0], [32.8, 188753.0], [32.9, 188753.0], [33.0, 188753.0], [33.1, 188753.0], [33.2, 188753.0], [33.3, 188753.0], [33.4, 188753.0], [33.5, 188753.0], [33.6, 188753.0], [33.7, 188753.0], [33.8, 188753.0], [33.9, 188753.0], [34.0, 197942.0], [34.1, 197942.0], [34.2, 197942.0], [34.3, 197942.0], [34.4, 197942.0], [34.5, 197942.0], [34.6, 197942.0], [34.7, 197942.0], [34.8, 197942.0], [34.9, 197942.0], [35.0, 197942.0], [35.1, 197942.0], [35.2, 197942.0], [35.3, 197942.0], [35.4, 197942.0], [35.5, 197942.0], [35.6, 197942.0], [35.7, 197942.0], [35.8, 197942.0], [35.9, 197942.0], [36.0, 209633.0], [36.1, 209633.0], [36.2, 209633.0], [36.3, 209633.0], [36.4, 209633.0], [36.5, 209633.0], [36.6, 209633.0], [36.7, 209633.0], [36.8, 209633.0], [36.9, 209633.0], [37.0, 209633.0], [37.1, 209633.0], [37.2, 209633.0], [37.3, 209633.0], [37.4, 209633.0], [37.5, 209633.0], [37.6, 209633.0], [37.7, 209633.0], [37.8, 209633.0], [37.9, 209633.0], [38.0, 218097.0], [38.1, 218097.0], [38.2, 218097.0], [38.3, 218097.0], [38.4, 218097.0], [38.5, 218097.0], [38.6, 218097.0], [38.7, 218097.0], [38.8, 218097.0], [38.9, 218097.0], [39.0, 218097.0], [39.1, 218097.0], [39.2, 218097.0], [39.3, 218097.0], [39.4, 218097.0], [39.5, 218097.0], [39.6, 218097.0], [39.7, 218097.0], [39.8, 218097.0], [39.9, 218097.0], [40.0, 233254.0], [40.1, 233254.0], [40.2, 233254.0], [40.3, 233254.0], [40.4, 233254.0], [40.5, 233254.0], [40.6, 233254.0], [40.7, 233254.0], [40.8, 233254.0], [40.9, 233254.0], [41.0, 233254.0], [41.1, 233254.0], [41.2, 233254.0], [41.3, 233254.0], [41.4, 233254.0], [41.5, 233254.0], [41.6, 233254.0], [41.7, 233254.0], [41.8, 233254.0], [41.9, 233254.0], [42.0, 247356.0], [42.1, 247356.0], [42.2, 247356.0], [42.3, 247356.0], [42.4, 247356.0], [42.5, 247356.0], [42.6, 247356.0], [42.7, 247356.0], [42.8, 247356.0], [42.9, 247356.0], [43.0, 247356.0], [43.1, 247356.0], [43.2, 247356.0], [43.3, 247356.0], [43.4, 247356.0], [43.5, 247356.0], [43.6, 247356.0], [43.7, 247356.0], [43.8, 247356.0], [43.9, 247356.0], [44.0, 255616.0], [44.1, 255616.0], [44.2, 255616.0], [44.3, 255616.0], [44.4, 255616.0], [44.5, 255616.0], [44.6, 255616.0], [44.7, 255616.0], [44.8, 255616.0], [44.9, 255616.0], [45.0, 255616.0], [45.1, 255616.0], [45.2, 255616.0], [45.3, 255616.0], [45.4, 255616.0], [45.5, 255616.0], [45.6, 255616.0], [45.7, 255616.0], [45.8, 255616.0], [45.9, 255616.0], [46.0, 263595.0], [46.1, 263595.0], [46.2, 263595.0], [46.3, 263595.0], [46.4, 263595.0], [46.5, 263595.0], [46.6, 263595.0], [46.7, 263595.0], [46.8, 263595.0], [46.9, 263595.0], [47.0, 263595.0], [47.1, 263595.0], [47.2, 263595.0], [47.3, 263595.0], [47.4, 263595.0], [47.5, 263595.0], [47.6, 263595.0], [47.7, 263595.0], [47.8, 263595.0], [47.9, 263595.0], [48.0, 281802.0], [48.1, 281802.0], [48.2, 281802.0], [48.3, 281802.0], [48.4, 281802.0], [48.5, 281802.0], [48.6, 281802.0], [48.7, 281802.0], [48.8, 281802.0], [48.9, 281802.0], [49.0, 281802.0], [49.1, 281802.0], [49.2, 281802.0], [49.3, 281802.0], [49.4, 281802.0], [49.5, 281802.0], [49.6, 281802.0], [49.7, 281802.0], [49.8, 281802.0], [49.9, 281802.0], [50.0, 292772.0], [50.1, 292772.0], [50.2, 292772.0], [50.3, 292772.0], [50.4, 292772.0], [50.5, 292772.0], [50.6, 292772.0], [50.7, 292772.0], [50.8, 292772.0], [50.9, 292772.0], [51.0, 292772.0], [51.1, 292772.0], [51.2, 292772.0], [51.3, 292772.0], [51.4, 292772.0], [51.5, 292772.0], [51.6, 292772.0], [51.7, 292772.0], [51.8, 292772.0], [51.9, 292772.0], [52.0, 300543.0], [52.1, 300543.0], [52.2, 300543.0], [52.3, 300543.0], [52.4, 300543.0], [52.5, 300543.0], [52.6, 300543.0], [52.7, 300543.0], [52.8, 300543.0], [52.9, 300543.0], [53.0, 300543.0], [53.1, 300543.0], [53.2, 300543.0], [53.3, 300543.0], [53.4, 300543.0], [53.5, 300543.0], [53.6, 300543.0], [53.7, 300543.0], [53.8, 300543.0], [53.9, 300543.0], [54.0, 312060.0], [54.1, 312060.0], [54.2, 312060.0], [54.3, 312060.0], [54.4, 312060.0], [54.5, 312060.0], [54.6, 312060.0], [54.7, 312060.0], [54.8, 312060.0], [54.9, 312060.0], [55.0, 312060.0], [55.1, 312060.0], [55.2, 312060.0], [55.3, 312060.0], [55.4, 312060.0], [55.5, 312060.0], [55.6, 312060.0], [55.7, 312060.0], [55.8, 312060.0], [55.9, 312060.0], [56.0, 320361.0], [56.1, 320361.0], [56.2, 320361.0], [56.3, 320361.0], [56.4, 320361.0], [56.5, 320361.0], [56.6, 320361.0], [56.7, 320361.0], [56.8, 320361.0], [56.9, 320361.0], [57.0, 320361.0], [57.1, 320361.0], [57.2, 320361.0], [57.3, 320361.0], [57.4, 320361.0], [57.5, 320361.0], [57.6, 320361.0], [57.7, 320361.0], [57.8, 320361.0], [57.9, 320361.0], [58.0, 328263.0], [58.1, 328263.0], [58.2, 328263.0], [58.3, 328263.0], [58.4, 328263.0], [58.5, 328263.0], [58.6, 328263.0], [58.7, 328263.0], [58.8, 328263.0], [58.9, 328263.0], [59.0, 328263.0], [59.1, 328263.0], [59.2, 328263.0], [59.3, 328263.0], [59.4, 328263.0], [59.5, 328263.0], [59.6, 328263.0], [59.7, 328263.0], [59.8, 328263.0], [59.9, 328263.0], [60.0, 337077.0], [60.1, 337077.0], [60.2, 337077.0], [60.3, 337077.0], [60.4, 337077.0], [60.5, 337077.0], [60.6, 337077.0], [60.7, 337077.0], [60.8, 337077.0], [60.9, 337077.0], [61.0, 337077.0], [61.1, 337077.0], [61.2, 337077.0], [61.3, 337077.0], [61.4, 337077.0], [61.5, 337077.0], [61.6, 337077.0], [61.7, 337077.0], [61.8, 337077.0], [61.9, 337077.0], [62.0, 347309.0], [62.1, 347309.0], [62.2, 347309.0], [62.3, 347309.0], [62.4, 347309.0], [62.5, 347309.0], [62.6, 347309.0], [62.7, 347309.0], [62.8, 347309.0], [62.9, 347309.0], [63.0, 347309.0], [63.1, 347309.0], [63.2, 347309.0], [63.3, 347309.0], [63.4, 347309.0], [63.5, 347309.0], [63.6, 347309.0], [63.7, 347309.0], [63.8, 347309.0], [63.9, 347309.0], [64.0, 355924.0], [64.1, 355924.0], [64.2, 355924.0], [64.3, 355924.0], [64.4, 355924.0], [64.5, 355924.0], [64.6, 355924.0], [64.7, 355924.0], [64.8, 355924.0], [64.9, 355924.0], [65.0, 355924.0], [65.1, 355924.0], [65.2, 355924.0], [65.3, 355924.0], [65.4, 355924.0], [65.5, 355924.0], [65.6, 355924.0], [65.7, 355924.0], [65.8, 355924.0], [65.9, 355924.0], [66.0, 368982.0], [66.1, 368982.0], [66.2, 368982.0], [66.3, 368982.0], [66.4, 368982.0], [66.5, 368982.0], [66.6, 368982.0], [66.7, 368982.0], [66.8, 368982.0], [66.9, 368982.0], [67.0, 368982.0], [67.1, 368982.0], [67.2, 368982.0], [67.3, 368982.0], [67.4, 368982.0], [67.5, 368982.0], [67.6, 368982.0], [67.7, 368982.0], [67.8, 368982.0], [67.9, 368982.0], [68.0, 385936.0], [68.1, 385936.0], [68.2, 385936.0], [68.3, 385936.0], [68.4, 385936.0], [68.5, 385936.0], [68.6, 385936.0], [68.7, 385936.0], [68.8, 385936.0], [68.9, 385936.0], [69.0, 385936.0], [69.1, 385936.0], [69.2, 385936.0], [69.3, 385936.0], [69.4, 385936.0], [69.5, 385936.0], [69.6, 385936.0], [69.7, 385936.0], [69.8, 385936.0], [69.9, 385936.0], [70.0, 393959.0], [70.1, 393959.0], [70.2, 393959.0], [70.3, 393959.0], [70.4, 393959.0], [70.5, 393959.0], [70.6, 393959.0], [70.7, 393959.0], [70.8, 393959.0], [70.9, 393959.0], [71.0, 393959.0], [71.1, 393959.0], [71.2, 393959.0], [71.3, 393959.0], [71.4, 393959.0], [71.5, 393959.0], [71.6, 393959.0], [71.7, 393959.0], [71.8, 393959.0], [71.9, 393959.0], [72.0, 401835.0], [72.1, 401835.0], [72.2, 401835.0], [72.3, 401835.0], [72.4, 401835.0], [72.5, 401835.0], [72.6, 401835.0], [72.7, 401835.0], [72.8, 401835.0], [72.9, 401835.0], [73.0, 401835.0], [73.1, 401835.0], [73.2, 401835.0], [73.3, 401835.0], [73.4, 401835.0], [73.5, 401835.0], [73.6, 401835.0], [73.7, 401835.0], [73.8, 401835.0], [73.9, 401835.0], [74.0, 411328.0], [74.1, 411328.0], [74.2, 411328.0], [74.3, 411328.0], [74.4, 411328.0], [74.5, 411328.0], [74.6, 411328.0], [74.7, 411328.0], [74.8, 411328.0], [74.9, 411328.0], [75.0, 411328.0], [75.1, 411328.0], [75.2, 411328.0], [75.3, 411328.0], [75.4, 411328.0], [75.5, 411328.0], [75.6, 411328.0], [75.7, 411328.0], [75.8, 411328.0], [75.9, 411328.0], [76.0, 420493.0], [76.1, 420493.0], [76.2, 420493.0], [76.3, 420493.0], [76.4, 420493.0], [76.5, 420493.0], [76.6, 420493.0], [76.7, 420493.0], [76.8, 420493.0], [76.9, 420493.0], [77.0, 420493.0], [77.1, 420493.0], [77.2, 420493.0], [77.3, 420493.0], [77.4, 420493.0], [77.5, 420493.0], [77.6, 420493.0], [77.7, 420493.0], [77.8, 420493.0], [77.9, 420493.0], [78.0, 433806.0], [78.1, 433806.0], [78.2, 433806.0], [78.3, 433806.0], [78.4, 433806.0], [78.5, 433806.0], [78.6, 433806.0], [78.7, 433806.0], [78.8, 433806.0], [78.9, 433806.0], [79.0, 433806.0], [79.1, 433806.0], [79.2, 433806.0], [79.3, 433806.0], [79.4, 433806.0], [79.5, 433806.0], [79.6, 433806.0], [79.7, 433806.0], [79.8, 433806.0], [79.9, 433806.0], [80.0, 442338.0], [80.1, 442338.0], [80.2, 442338.0], [80.3, 442338.0], [80.4, 442338.0], [80.5, 442338.0], [80.6, 442338.0], [80.7, 442338.0], [80.8, 442338.0], [80.9, 442338.0], [81.0, 442338.0], [81.1, 442338.0], [81.2, 442338.0], [81.3, 442338.0], [81.4, 442338.0], [81.5, 442338.0], [81.6, 442338.0], [81.7, 442338.0], [81.8, 442338.0], [81.9, 442338.0], [82.0, 450690.0], [82.1, 450690.0], [82.2, 450690.0], [82.3, 450690.0], [82.4, 450690.0], [82.5, 450690.0], [82.6, 450690.0], [82.7, 450690.0], [82.8, 450690.0], [82.9, 450690.0], [83.0, 450690.0], [83.1, 450690.0], [83.2, 450690.0], [83.3, 450690.0], [83.4, 450690.0], [83.5, 450690.0], [83.6, 450690.0], [83.7, 450690.0], [83.8, 450690.0], [83.9, 450690.0], [84.0, 458735.0], [84.1, 458735.0], [84.2, 458735.0], [84.3, 458735.0], [84.4, 458735.0], [84.5, 458735.0], [84.6, 458735.0], [84.7, 458735.0], [84.8, 458735.0], [84.9, 458735.0], [85.0, 458735.0], [85.1, 458735.0], [85.2, 458735.0], [85.3, 458735.0], [85.4, 458735.0], [85.5, 458735.0], [85.6, 458735.0], [85.7, 458735.0], [85.8, 458735.0], [85.9, 458735.0], [86.0, 466995.0], [86.1, 466995.0], [86.2, 466995.0], [86.3, 466995.0], [86.4, 466995.0], [86.5, 466995.0], [86.6, 466995.0], [86.7, 466995.0], [86.8, 466995.0], [86.9, 466995.0], [87.0, 466995.0], [87.1, 466995.0], [87.2, 466995.0], [87.3, 466995.0], [87.4, 466995.0], [87.5, 466995.0], [87.6, 466995.0], [87.7, 466995.0], [87.8, 466995.0], [87.9, 466995.0], [88.0, 475075.0], [88.1, 475075.0], [88.2, 475075.0], [88.3, 475075.0], [88.4, 475075.0], [88.5, 475075.0], [88.6, 475075.0], [88.7, 475075.0], [88.8, 475075.0], [88.9, 475075.0], [89.0, 475075.0], [89.1, 475075.0], [89.2, 475075.0], [89.3, 475075.0], [89.4, 475075.0], [89.5, 475075.0], [89.6, 475075.0], [89.7, 475075.0], [89.8, 475075.0], [89.9, 475075.0], [90.0, 483906.0], [90.1, 483906.0], [90.2, 483906.0], [90.3, 483906.0], [90.4, 483906.0], [90.5, 483906.0], [90.6, 483906.0], [90.7, 483906.0], [90.8, 483906.0], [90.9, 483906.0], [91.0, 483906.0], [91.1, 483906.0], [91.2, 483906.0], [91.3, 483906.0], [91.4, 483906.0], [91.5, 483906.0], [91.6, 483906.0], [91.7, 483906.0], [91.8, 483906.0], [91.9, 483906.0], [92.0, 492217.0], [92.1, 492217.0], [92.2, 492217.0], [92.3, 492217.0], [92.4, 492217.0], [92.5, 492217.0], [92.6, 492217.0], [92.7, 492217.0], [92.8, 492217.0], [92.9, 492217.0], [93.0, 492217.0], [93.1, 492217.0], [93.2, 492217.0], [93.3, 492217.0], [93.4, 492217.0], [93.5, 492217.0], [93.6, 492217.0], [93.7, 492217.0], [93.8, 492217.0], [93.9, 492217.0], [94.0, 500414.0], [94.1, 500414.0], [94.2, 500414.0], [94.3, 500414.0], [94.4, 500414.0], [94.5, 500414.0], [94.6, 500414.0], [94.7, 500414.0], [94.8, 500414.0], [94.9, 500414.0], [95.0, 500414.0], [95.1, 500414.0], [95.2, 500414.0], [95.3, 500414.0], [95.4, 500414.0], [95.5, 500414.0], [95.6, 500414.0], [95.7, 500414.0], [95.8, 500414.0], [95.9, 500414.0], [96.0, 508739.0], [96.1, 508739.0], [96.2, 508739.0], [96.3, 508739.0], [96.4, 508739.0], [96.5, 508739.0], [96.6, 508739.0], [96.7, 508739.0], [96.8, 508739.0], [96.9, 508739.0], [97.0, 508739.0], [97.1, 508739.0], [97.2, 508739.0], [97.3, 508739.0], [97.4, 508739.0], [97.5, 508739.0], [97.6, 508739.0], [97.7, 508739.0], [97.8, 508739.0], [97.9, 508739.0], [98.0, 516803.0], [98.1, 516803.0], [98.2, 516803.0], [98.3, 516803.0], [98.4, 516803.0], [98.5, 516803.0], [98.6, 516803.0], [98.7, 516803.0], [98.8, 516803.0], [98.9, 516803.0], [99.0, 516803.0], [99.1, 516803.0], [99.2, 516803.0], [99.3, 516803.0], [99.4, 516803.0], [99.5, 516803.0], [99.6, 516803.0], [99.7, 516803.0], [99.8, 516803.0], [99.9, 516803.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 17100.0, "maxY": 1.0, "series": [{"data": [[160400.0, 1.0], [171600.0, 1.0], [347300.0, 1.0], [368900.0, 1.0], [209600.0, 1.0], [411300.0, 1.0], [218000.0, 1.0], [233200.0, 1.0], [255600.0, 1.0], [312000.0, 1.0], [516800.0, 1.0], [263500.0, 1.0], [320300.0, 1.0], [180500.0, 1.0], [385900.0, 1.0], [393900.0, 1.0], [458700.0, 1.0], [247300.0, 1.0], [281800.0, 1.0], [75300.0, 1.0], [328200.0, 1.0], [337000.0, 1.0], [401800.0, 1.0], [105500.0, 1.0], [433800.0, 1.0], [114100.0, 1.0], [450600.0, 1.0], [122100.0, 1.0], [492200.0, 1.0], [135000.0, 1.0], [149400.0, 1.0], [300500.0, 1.0], [466900.0, 1.0], [17100.0, 1.0], [420400.0, 1.0], [29200.0, 1.0], [500400.0, 1.0], [292700.0, 1.0], [41100.0, 1.0], [355900.0, 1.0], [188700.0, 1.0], [197900.0, 1.0], [52800.0, 1.0], [442300.0, 1.0], [483900.0, 1.0], [64900.0, 1.0], [508700.0, 1.0], [83800.0, 1.0], [97200.0, 1.0], [475000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 516800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 50.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 50.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.70438154E12, "maxY": 50.0, "series": [{"data": [[1.70438184E12, 24.0], [1.70438154E12, 50.0], [1.70438202E12, 6.0], [1.70438172E12, 35.5], [1.7043819E12, 19.0], [1.7043816E12, 46.5], [1.70438208E12, 1.5], [1.70438178E12, 29.5], [1.70438196E12, 13.0], [1.70438166E12, 41.0]], "isOverall": false, "label": "User", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70438208E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
        data: {"result": {"minY": 17112.0, "minX": 1.0, "maxY": 516803.0, "series": [{"data": [[2.0, 508739.0], [3.0, 500414.0], [4.0, 492217.0], [5.0, 483906.0], [6.0, 475075.0], [7.0, 466995.0], [8.0, 458735.0], [9.0, 450690.0], [10.0, 442338.0], [11.0, 433806.0], [12.0, 420493.0], [13.0, 411328.0], [14.0, 401835.0], [15.0, 393959.0], [16.0, 385936.0], [17.0, 368982.0], [18.0, 355924.0], [19.0, 347309.0], [20.0, 337077.0], [21.0, 328263.0], [22.0, 320361.0], [23.0, 312060.0], [24.0, 300543.0], [25.0, 292772.0], [26.0, 281802.0], [27.0, 263595.0], [28.0, 255616.0], [29.0, 247356.0], [30.0, 233254.0], [31.0, 218097.0], [33.0, 197942.0], [32.0, 209633.0], [35.0, 180501.0], [34.0, 188753.0], [37.0, 160478.0], [36.0, 171648.0], [39.0, 135091.0], [38.0, 149426.0], [41.0, 114166.0], [40.0, 122116.0], [43.0, 97222.0], [42.0, 105522.0], [45.0, 75321.0], [44.0, 83800.0], [47.0, 52880.0], [46.0, 64936.0], [49.0, 29212.0], [48.0, 41149.0], [50.0, 17112.0], [1.0, 516803.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[25.5, 278063.76]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4.233333333333333, "minX": 1.70438154E12, "maxY": 129.38333333333333, "series": [{"data": [[1.70438184E12, 21.85], [1.70438154E12, 4.233333333333333], [1.70438202E12, 28.25], [1.70438172E12, 24.966666666666665], [1.7043819E12, 21.616666666666667], [1.7043816E12, 25.566666666666666], [1.70438208E12, 8.233333333333333], [1.70438178E12, 24.033333333333335], [1.70438196E12, 29.6], [1.70438166E12, 21.183333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70438184E12, 92.41666666666667], [1.70438154E12, 18.483333333333334], [1.70438202E12, 129.38333333333333], [1.70438172E12, 110.9], [1.7043819E12, 92.41666666666667], [1.7043816E12, 110.9], [1.70438208E12, 36.96666666666667], [1.70438178E12, 110.9], [1.70438196E12, 129.38333333333333], [1.70438166E12, 92.41666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70438208E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
        data: {"result": {"minY": 17112.0, "minX": 1.70438154E12, "maxY": 512771.0, "series": [{"data": [[1.70438184E12, 301507.6], [1.70438154E12, 17112.0], [1.70438202E12, 475433.1428571429], [1.70438172E12, 174791.33333333334], [1.7043819E12, 347511.0], [1.7043816E12, 57883.0], [1.70438208E12, 512771.0], [1.70438178E12, 237925.1666666667], [1.70438196E12, 412813.5714285715], [1.70438166E12, 114823.4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70438208E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
        data: {"result": {"minY": 17099.0, "minX": 1.70438154E12, "maxY": 512770.5, "series": [{"data": [[1.70438184E12, 301507.6], [1.70438154E12, 17099.0], [1.70438202E12, 475433.1428571429], [1.70438172E12, 174791.16666666666], [1.7043819E12, 347511.0], [1.7043816E12, 57882.833333333336], [1.70438208E12, 512770.5], [1.70438178E12, 237924.83333333334], [1.70438196E12, 412813.4285714286], [1.70438166E12, 114823.4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70438208E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
        data: {"result": {"minY": 1.4, "minX": 1.70438154E12, "maxY": 75.6, "series": [{"data": [[1.70438184E12, 1.4], [1.70438154E12, 35.0], [1.70438202E12, 1.7142857142857144], [1.70438172E12, 47.5], [1.7043819E12, 1.6], [1.7043816E12, 66.16666666666667], [1.70438208E12, 1.5], [1.70438178E12, 14.166666666666668], [1.70438196E12, 1.4285714285714286], [1.70438166E12, 75.6]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70438208E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
        data: {"result": {"minY": 17112.0, "minX": 1.70438154E12, "maxY": 516803.0, "series": [{"data": [[1.70438184E12, 320361.0], [1.70438154E12, 17112.0], [1.70438202E12, 500414.0], [1.70438172E12, 197942.0], [1.7043819E12, 368982.0], [1.7043816E12, 83800.0], [1.70438208E12, 516803.0], [1.70438178E12, 263595.0], [1.70438196E12, 442338.0], [1.70438166E12, 135091.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70438184E12, 320361.0], [1.70438154E12, 17112.0], [1.70438202E12, 500414.0], [1.70438172E12, 197942.0], [1.7043819E12, 368982.0], [1.7043816E12, 83800.0], [1.70438208E12, 516803.0], [1.70438178E12, 263595.0], [1.70438196E12, 442338.0], [1.70438166E12, 135091.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70438184E12, 320361.0], [1.70438154E12, 17112.0], [1.70438202E12, 500414.0], [1.70438172E12, 197942.0], [1.7043819E12, 368982.0], [1.7043816E12, 83800.0], [1.70438208E12, 516803.0], [1.70438178E12, 263595.0], [1.70438196E12, 442338.0], [1.70438166E12, 135091.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70438184E12, 320361.0], [1.70438154E12, 17112.0], [1.70438202E12, 500414.0], [1.70438172E12, 197942.0], [1.7043819E12, 368982.0], [1.7043816E12, 83800.0], [1.70438208E12, 516803.0], [1.70438178E12, 263595.0], [1.70438196E12, 442338.0], [1.70438166E12, 135091.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.70438184E12, 281802.0], [1.70438154E12, 17112.0], [1.70438202E12, 450690.0], [1.70438172E12, 149426.0], [1.7043819E12, 328263.0], [1.7043816E12, 29212.0], [1.70438208E12, 508739.0], [1.70438178E12, 209633.0], [1.70438196E12, 385936.0], [1.70438166E12, 97222.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70438184E12, 300543.0], [1.70438154E12, 17112.0], [1.70438202E12, 475075.0], [1.70438172E12, 176074.5], [1.7043819E12, 347309.0], [1.7043816E12, 58908.0], [1.70438208E12, 512771.0], [1.70438178E12, 240305.0], [1.70438196E12, 411328.0], [1.70438166E12, 114166.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70438208E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
    data: {"result": {"minY": 287287.0, "minX": 1.0, "maxY": 287287.0, "series": [{"data": [[1.0, 287287.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 287287.0, "minX": 1.0, "maxY": 287287.0, "series": [{"data": [[1.0, 287287.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.70438154E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.70438154E12, 0.8333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70438154E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.70438154E12, "maxY": 0.11666666666666667, "series": [{"data": [[1.70438184E12, 0.08333333333333333], [1.70438154E12, 0.016666666666666666], [1.70438202E12, 0.11666666666666667], [1.70438172E12, 0.1], [1.7043819E12, 0.08333333333333333], [1.7043816E12, 0.1], [1.70438208E12, 0.03333333333333333], [1.70438178E12, 0.1], [1.70438196E12, 0.11666666666666667], [1.70438166E12, 0.08333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70438208E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.70438154E12, "maxY": 0.11666666666666667, "series": [{"data": [[1.70438184E12, 0.08333333333333333], [1.70438154E12, 0.016666666666666666], [1.70438202E12, 0.11666666666666667], [1.70438172E12, 0.1], [1.7043819E12, 0.08333333333333333], [1.7043816E12, 0.1], [1.70438208E12, 0.03333333333333333], [1.70438178E12, 0.1], [1.70438196E12, 0.11666666666666667], [1.70438166E12, 0.08333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70438208E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.70438154E12, "maxY": 0.11666666666666667, "series": [{"data": [[1.70438184E12, 0.08333333333333333], [1.70438154E12, 0.016666666666666666], [1.70438202E12, 0.11666666666666667], [1.70438172E12, 0.1], [1.7043819E12, 0.08333333333333333], [1.7043816E12, 0.1], [1.70438208E12, 0.03333333333333333], [1.70438178E12, 0.1], [1.70438196E12, 0.11666666666666667], [1.70438166E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70438208E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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

