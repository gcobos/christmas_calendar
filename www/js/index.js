/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        if(typeof(Storage) !== "undefined") {
            var i = 1;
            while (i <= 31) {
                var key = 'day'+i
                if (localStorage[key]) {
                    $('#'+key).addClass('open');
                    $('#'+key).find('.day').hide();
                }
                i=i+1;
            }
        } else {
            alert('Sorry, no local storage support!');
            localStorage = null;
        }
    
        $('.day-frm').bind('touchend, click', function () {
            var frm = $(this);
            var box = $(this).find('.day');
            var d = new Date();
            var day = parseInt(frm.attr('id').substring(3));
            if (!frm.is('.open') && !box.is('.opening') && d.getMonth()==11 && d.getDate() >= day) {
                frm.addClass('open');
                if (localStorage) {
                    localStorage[frm.attr('id')] = 1;
                }
                box.addClass('magictime perspectiveLeft opening');
                setTimeout(function(){ 
                    box.fadeOut();
                }, 600 );
            }
        });
        /*
        $('img').hover(function() {
            $(this).toggle({
                effect: "scale",
                percent: "100%"
            },200);
        }, function() {
            $(this).toggle({
                effect: "scale",
                percent: "50%"
            },200);
        });
        */


    }
};
