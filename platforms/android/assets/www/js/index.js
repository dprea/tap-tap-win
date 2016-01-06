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
        app.startButton = document.getElementById('startbutton');
        app.square1 = document.getElementById('square1');
        app.square2 = document.getElementById('square2');
        app.square3 = document.getElementById('square3');
        app.square4 = document.getElementById('square4');

        app.score = 0;
        app.scoreElement = document.getElementById('score');

        this.bindEvents();


    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        app.startButton.addEventListener('click', this.onTouchStart, false);
        document.addEventListener('gamestart', this.onGameStart, false);
        app.square1.addEventListener('click', this.onTouchSquare1, false);
        app.square2.addEventListener('click', this.onTouchSquare2, false);
        app.square3.addEventListener('click', this.onTouchSquare3, false);
        app.square4.addEventListener('click', this.onTouchSquare4, false);
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    onTouchStart: function(event) {
        event.preventDefault();
        console.log('Start Button Pressed');
        app.onGameStart();
    },

    onGameStart: function() {
        app.receivedEvent('gamestart');
        console.log('Game has started');
        /*
        * Start the game code;
         */
        app.score = 0;
        app.updateScore();
    },

    onTouchSquare1: function() {;
        console.log('Square1 Touched');
        app.score += 2;
        app.updateScore();
    },

    onTouchSquare2: function() {;
        console.log('Square2 Touched');
        app.score += 2;
        app.updateScore();
    },

    onTouchSquare3: function() {;
        console.log('Square3 Touched');
        app.score += 2;
        app.updateScore();
    },

    onTouchSquare4: function() {
        console.log('Square4 Touched');
        app.score += 2;
        app.updateScore();
    },

    updateScore: function() {
        var scoreString = app.score.toString();
        app.scoreElement.innerHTML = scoreString;
    }


};  // end App declaration.

app.initialize();