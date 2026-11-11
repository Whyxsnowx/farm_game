// ==========================================
// 1. —÷≈Õ¿ Ã≈Õﬁ
// ==========================================
class MenuScene extends Phaser.Scene {
    constructor() { super({ key: 'MenuScene' }); }
    create() {
        this.cameras.main.setBackgroundColor('#2e5b24');
        if (this.textures.exists('ui_main_bg')) this.add.image(960, 540, 'ui_main_bg').setDisplaySize(1920, 1080);
        this.add.text(960, 400, '\u0422\u0420\u0418 \u0414\u041d\u042f \u041d\u0410 \u0424\u0415\u0420\u041c\u0415', { fontSize: '120px', color: '#ffffff', fontFamily: 'Courier New', fontStyle: 'bold' }).setOrigin(0.5);
        
        let playBtn;
        if (this.textures.exists('ui_btn_bg')) playBtn = this.add.image(960, 600, 'ui_btn_bg').setDisplaySize(400, 100).setInteractive();
        else playBtn = this.add.rectangle(960, 600, 400, 100, 0xe67e22).setInteractive();
        
        this.add.text(960, 600, '\u0418\u0413\u0420\u0410\u0422\u042c', { fontSize: '60px', color: '#ffffff', fontFamily: 'Courier New', fontStyle: 'bold' }).setOrigin(0.5);
        playBtn.on('pointerdown', () => { this.scene.start('IntroScene'); });
        
        this.input.once('pointerdown', () => {
            if (this.cache.audio.exists('bgMusic')) {
                this.bgMusic = this.sound.add('bgMusic', { loop: true, volume: 0.5 });
                this.bgMusic.play();
            }
        });
    }
}

// ==========================================
// 2. —÷≈Õ¿ œ–ŒÀŒ√¿
// ==========================================
class IntroScene extends Phaser.Scene {
    constructor() { super({ key: 'IntroScene' }); }
    create() {
        this.cameras.main.setBackgroundColor('#1a1a2e');
        this.add.text(960, 300, '\u0414\u044f\u0434\u044f \u043f\u043e\u0434\u0430\u0440\u0438\u043b \u0412\u0430\u043c \u0443\u0447\u0430\u0441\u0442\u043e\u043a!', { fontSize: '60px', color: '#ffffff', fontFamily: 'Courier New' }).setOrigin(0.5);
        this.add.text(960, 450, '\u041d\u043e \u0435\u0441\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u0435: \u0437\u0430 3 \u0434\u043d\u044f \u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c 700 \u043c\u043e\u043d\u0435\u0442.', { fontSize: '40px', color: '#ffff00', fontFamily: 'Courier New' }).setOrigin(0.5);
        this.add.text(960, 550, '\u0418\u043d\u0430\u0447\u0435 \u0444\u0435\u0440\u043c\u0430 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0434\u0430\u043d\u0430. \u0423\u0434\u0430\u0447\u0438 \u0412\u0430\u043c!', { fontSize: '40px', color: '#ffffff', fontFamily: 'Courier New' }).setOrigin(0.5);
        let startText = this.add.text(960, 800, '\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043b\u044e\u0431\u0443\u044e \u043a\u043d\u043e\u043f\u043a\u0443, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c', { fontSize: '30px', color: '#aaaaaa', fontFamily: 'Courier New' }).setOrigin(0.5);
        this.tweens.add({ targets: startText, alpha: 0, duration: 800, yoyo: true, repeat: -1 });
        this.input.once('pointerdown', () => { this.scene.start('GameScene'); });
    }
}

// ==========================================
// 3. —÷≈Õ¿ œ¿”«€
// ==========================================
class PauseScene extends Phaser.Scene {
    constructor() { super({ key: 'PauseScene' }); }
    create() {
        this.add.rectangle(960, 540, 1920, 1080, 0x000000, 0.7);
        if (this.textures.exists('ui_pause')) this.add.image(960, 540, 'ui_pause').setDisplaySize(800, 600);
        else this.add.rectangle(960, 540, 800, 600, 0x2e5b24);

        this.add.text(960, 400, '\u041f\u0410\u0423\u0417\u0410', { fontSize: '80px', color: '#ffffff', fontFamily: 'Courier New', fontStyle: 'bold' }).setOrigin(0.5);
        this.add.text(960, 600, '\u041d\u0430\u0436\u043c\u0438\u0442\u0435 ESC \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c', { fontSize: '30px', color: '#aaaaaa', fontFamily: 'Courier New' }).setOrigin(0.5);

        this.input.keyboard.on('keydown-ESC', () => {
            this.scene.stop(); 
            this.scene.resume('GameScene'); 
        });
    }
}

// ==========================================
// 4. Œ—ÕŒ¬Õ¿ﬂ »√–¿
// ==========================================
class GameScene extends Phaser.Scene {
    constructor() { super({ key: 'GameScene' }); }

    preload() {
        this.load.image('grass_1', 'assets/grass_1.png');
        this.load.image('grass_2', 'assets/grass_2.png');
        this.load.image('grass_3', 'assets/grass_3.png');
        this.load.image('water', 'assets/water.png');
        this.load.image('shore', 'assets/shore.png'); 
        this.load.image('tree', 'assets/tree.png');
        this.load.image('soil_dry', 'assets/soil_dry.png');
        this.load.image('soil_wet', 'assets/soil_wet.png?v=5'); 
        this.load.image('sprout', 'assets/sprout.png');
        this.load.image('carrot', 'assets/carrot.png');
        this.load.image('farmer_right', 'assets/farmer_right.png');
        this.load.image('farmer_left', 'assets/farmer_left.png');
        this.load.image('bucket', 'assets/bucket.png');
        this.load.image('barrel', 'assets/barrel.png');
        this.load.image('crow', 'assets/crow.png'); 
        
        // œ–»Õ”ƒ»“≈À‹Õ¿ﬂ «¿√–”« ¿ Ã¿√¿«»Õ¿ » œ”√¿À¿
        this.load.image('shop', 'assets/shop.png?v=9');
        this.load.image('scarecrow', 'assets/scarecrow.png?v=9');
        
        this.load.image('ui_money', 'assets/ui_money.png');
        this.load.image('ui_seeds', 'assets/ui_seeds.png');
        this.load.image('ui_day', 'assets/ui_day.png');
        this.load.image('ui_timer', 'assets/ui_timer.png');
        this.load.image('ui_win', 'assets/ui_win.png'); 
        this.load.image('ui_lose', 'assets/ui_lose.png'); 
        this.load.audio('bgMusic', 'assets/music.mp3');
    }

    create() {
        this.isGameOver = false;
        this.isPaused = false;
        this.isDayOver = false;
        this.facingRight = true;
        this.tutorialStep = 0; 
        this.tutorialText = null;

        // —ÀŒ… 1: «¿ƒÕ»… ‘ŒÕ
        this.bgLayer = this.add.layer();
        if (this.textures.exists('grass_1')) {
            let tileSize = 64; 
            for (let x = 0; x < 1920; x += tileSize) {
                for (let y = 0; y < 950; y += tileSize) {
                    let randomGrass = Phaser.Math.Between(1, 3);
                    this.bgLayer.add(this.add.image(x, y, 'grass_' + randomGrass).setOrigin(0).setDisplaySize(tileSize, tileSize));
                }
            }
        }
        if (this.textures.exists('water')) {
            if (this.textures.exists('shore')) {
                for(let i = 0; i < 6; i++) this.bgLayer.add(this.add.image(i * 320, 950, 'shore').setOrigin(0).setDisplaySize(320, 80));
            }
            for(let i = 0; i < 6; i++) this.bgLayer.add(this.add.image(i * 320, 1030, 'water').setOrigin(0).setDisplaySize(320, 50));
        }
        if (this.textures.exists('tree')) {
            let treePositions = [{ x: 100, y: 100 }, { x: 300, y: 50 }, { x: 500, y: 180 }, { x: 750, y: 80 }, { x: 950, y: 150 }, { x: 1100, y: 60 }, { x: 1300, y: 200 }, { x: 1500, y: 100 }, { x: 1750, y: 150 }, { x: 200, y: 250 }, { x: 850, y: 280 }, { x: 1450, y: 300 }];
            treePositions.forEach(pos => this.bgLayer.add(this.add.image(pos.x, pos.y, 'tree').setScale(10))); 
        }

        // —ÀŒ… 2: »√–Œ¬€≈ Œ¡⁄≈ “€
        this.gameLayer = this.add.layer();
        this.money = 50;
        this.seeds = 0;
        this.hasScarecrow = false;
        this.waterInHands = false;
        this.currentDay = 1;
        this.maxDays = 3;
        this.timeLeft = 300; 

        this.barrel = this.gameLayer.add(this.add.image(200, 800, 'barrel').setDisplaySize(120, 120));
        
        this.buildShop();

        this.plots = [];
        let startX = 700; let startY = 450; let spacing = 150;
        for (let row = 0; row < 2; row++) {
            for (let col = 0; col < 3; col++) {
                let plotX = startX + (col * spacing); let plotY = startY + (row * spacing);
                let soil = this.gameLayer.add(this.add.image(plotX, plotY, 'soil_dry').setDisplaySize(100, 100));
                soil.setInteractive();
                let plant = this.add.image(plotX, plotY + 5, 'sprout').setDisplaySize(50, 50);
                plant.setVisible(false);
                this.gameLayer.add(plant);
                soil.setData('state', 'empty'); soil.setData('watered', false); soil.setData('timer', null); soil.setData('plant', plant); 
                this.plots.push(soil);
            }
        }

        this.player = this.gameLayer.add(this.add.image(640, 800, 'farmer_right').setDisplaySize(100, 100));
        this.physics.add.existing(this.player);
        
        this.walls = this.physics.add.staticGroup();
        let waterWall = this.add.rectangle(960, 1015, 1920, 130, 0x000000, 0);
        this.physics.add.existing(waterWall, true);
        this.walls.add(waterWall);
        this.physics.add.collider(this.player, this.walls);
        this.player.body.setCollideWorldBounds(true); 

        this.bucketSprite = this.add.image(this.player.x + 35, this.player.y + 30, 'bucket').setDisplaySize(35, 35);
        this.bucketSprite.setVisible(false);
        this.gameLayer.add(this.bucketSprite);

        // —ÀŒ… 3: ÕŒ◊‹
        this.nightOverlay = this.add.rectangle(960, 540, 1920, 1080, 0x000000, 0);
        this.nightOverlay.setDepth(10); 

        // —ÀŒ… 4: »Õ“≈–‘≈…—
        this.uiLayer = this.add.layer();
        this.uiLayer.setDepth(20);

        this.addUIBackground(50, 50, 260, 60, 'ui_money'); 
        this.addUIBackground(50, 120, 260, 60, 'ui_seeds'); 
        this.addUIBackground(50, 190, 300, 60, 'ui_day');   
        this.addUIBackground(1500, 50, 150, 55, 'ui_timer'); 

        this.moneyText = this.uiLayer.add(this.add.text(70, 60, '\u041c\u043e\u043d\u0435\u0442\u044b: ' + this.money, { fontSize: '36px', color: '#ffffff', fontFamily: 'Courier New' }));
        this.seedsText = this.uiLayer.add(this.add.text(70, 130, '\u0421\u0435\u043c\u0435\u043d\u0430: ' + this.seeds, { fontSize: '36px', color: '#ffffff', fontFamily: 'Courier New' }));
        this.dayText = this.uiLayer.add(this.add.text(70, 200, '\u0414\u0435\u043d\u044c: 1 / 3', { fontSize: '36px', color: '#ffffff', fontFamily: 'Courier New' }));
        this.timerText = this.uiLayer.add(this.add.text(1520, 60, '10:00', { fontSize: '36px', color: '#ffffff', fontFamily: 'Courier New' }));
        
        this.hintText = this.uiLayer.add(this.add.text(960, 1000, '', { fontSize: '40px', color: '#ffffff', fontFamily: 'Courier New' }).setOrigin(0.5));

        // ”Ô‡‚ÎÂÌËÂ
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys('W,A,S,D');
        this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        this.key1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        this.key2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        
        // œ‡ÛÁ‡
        this.input.keyboard.on('keydown-ESC', () => {
            if (this.isGameOver || this.isPaused) return;
            this.isPaused = true;
            this.scene.pause(); 
            this.scene.launch('PauseScene'); 
        });
        this.events.on('resume', () => { this.isPaused = false; });

        this.crowTimer = this.time.addEvent({ delay: 30000, callback: this.triggerCrowAttack, callbackScope: this, loop: true });

        this.startTutorial();
    }

    startTutorial() {
        this.tutorialText = this.uiLayer.add(this.add.text(960, 300, '\u041a\u0443\u043f\u0438\u0442\u0435 \u0441\u0435\u043c\u0435\u043d\u0430 \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435 (\u043d\u0430\u0436\u043c\u0438\u0442\u0435 1)', { 
            fontSize: '30px', color: '#ffff00', fontFamily: 'Courier New', backgroundColor: '#000000aa', padding: { x: 20, y: 10 } 
        }).setOrigin(0.5));
    }

    buildShop() {
        // œ–»Õ”ƒ»“≈À‹ÕŒ —“¿¬»Ã  ¿–“»Õ ”
        if (this.textures.exists('shop')) {
            this.gameLayer.add(this.add.image(1740, 780, 'shop').setDisplaySize(200, 200));
        } else {
            let shopX = 1650;
            let shopY = 750;
            let g = this.add.graphics();
            g.fillStyle(0x8B4513, 1); g.fillRect(shopX - 20, shopY - 100, 220, 100);
            g.fillStyle(0x3E2723, 1); g.fillRect(shopX, shopY - 60, 180, 10); g.fillRect(shopX, shopY - 30, 180, 10);
            g.fillStyle(0x2ECC71, 1); g.fillRect(shopX + 10, shopY - 90, 30, 30); 
            g.fillStyle(0xE74C3C, 1); g.fillRect(shopX + 50, shopY - 90, 30, 30); 
            g.fillStyle(0x3498DB, 1); g.fillRect(shopX + 140, shopY - 90, 30, 30); 
            g.fillStyle(0x5D4037, 1); g.fillRect(shopX - 30, shopY, 240, 60);
            g.fillStyle(0x3E2723, 1); g.fillRect(shopX - 20, shopY, 20, 60); g.fillRect(shopX + 180, shopY, 20, 60);
            g.fillStyle(0xA0522D, 1); g.fillTriangle(shopX - 50, shopY - 100, shopX + 230, shopY - 100, shopX + 90, shopY - 180);
            g.fillStyle(0xF1C40F, 1); g.fillRect(shopX + 30, shopY - 150, 120, 40);
            this.gameLayer.add(g);
            let shopText = this.add.text(shopX + 90, shopY - 130, 'SHOP', { fontSize: '28px', color: '#000000', fontFamily: 'Courier New', fontStyle: 'bold' }).setOrigin(0.5);
            this.gameLayer.add(shopText);
        }
    }

    addUIBackground(x, y, w, h, textureKey) {
        if (this.textures.exists(textureKey)) this.uiLayer.add(this.add.image(x, y, textureKey).setOrigin(0).setDisplaySize(w, h));
        else {
            let bg = this.add.graphics(); bg.fillStyle(0x000000, 0.5); bg.fillRoundedRect(x, y, w, h, 10);
            this.uiLayer.add(bg);
        }
    }

    update() {
        if (this.isGameOver || this.isPaused || this.isDayOver) {
            if (this.player && this.player.body) {
                this.player.body.setVelocity(0);
                this.player.body.setAcceleration(0);
            }
            return; 
        }

        if (this.money < 15 && this.seeds === 0) {
            let hasPlanted = false;
            this.plots.forEach(plot => { if (plot.getData('state') !== 'empty') hasPlanted = true; });
            if (!hasPlanted) { this.gameOver('\u0412\u044b \u0411\u0410\u041d\u041a\u0420\u041e\u0422!'); return; }
        }

        if (this.timeLeft > 0) {
            this.timeLeft -= 1/60; 
            
            let elapsedGameMinutes = ((300 - this.timeLeft) / 300) * 840; 
            let totalGameMinutes = 600 + elapsedGameMinutes; 
            
            let hours = Math.floor(totalGameMinutes / 60);
            let minutes = Math.floor(totalGameMinutes % 60);
            let minStr = minutes < 10 ? '0' + minutes : minutes;
            
            if (hours > 24) hours = 24;
            if (hours === 24 && minutes > 0) minutes = 0;
            
            this.timerText.setText(hours + ':' + minStr);

            if (hours >= 22) {
                let nightProgress = (totalGameMinutes - 1320) / 120; 
                if (nightProgress > 1) nightProgress = 1;
                if (nightProgress < 0) nightProgress = 0;
                this.nightOverlay.setAlpha(nightProgress * 0.9); 
            } else {
                this.nightOverlay.setAlpha(0);
            }

            if (this.timeLeft <= 0) this.endDay();
        }

        const speed = 600; 
        this.player.body.setVelocity(0); 
        
        if (this.cursors.left.isDown || this.wasd.A.isDown) { 
            this.player.body.setVelocityX(-speed);
            if (this.facingRight) { this.player.setTexture('farmer_left'); this.player.setDisplaySize(100, 100); this.facingRight = false; }
        }
        if (this.cursors.right.isDown || this.wasd.D.isDown) { 
            this.player.body.setVelocityX(speed);
            if (!this.facingRight) { this.player.setTexture('farmer_right'); this.player.setDisplaySize(100, 100); this.facingRight = true; }
        }
        if (this.cursors.up.isDown || this.wasd.W.isDown) this.player.body.setVelocityY(-speed);
        if (this.cursors.down.isDown || this.wasd.S.isDown) this.player.body.setVelocityY(speed);

        this.bucketSprite.x = this.player.x + (this.facingRight ? 35 : -35);
        this.bucketSprite.y = this.player.y + 30;

        this.hintText.setText(''); 
        
        let distanceToBarrel = Phaser.Math.Distance.Between(this.player.x, this.player.y, 200, 800);
        if (distanceToBarrel < 120) {
            this.hintText.setText('\u041d\u0430\u0436\u043c\u0438\u0442\u0435 E, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0431\u0440\u0430\u0442\u044c \u0432\u043e\u0434\u044b');
            if (Phaser.Input.Keyboard.JustDown(this.keyE)) {
                this.waterInHands = true; this.bucketSprite.setVisible(true); this.flashText('\u0412\u044b \u043d\u0430\u0431\u0440\u0430\u043b\u0438 \u0432\u043e\u0434\u044b');
                if(this.tutorialStep === 2) { this.tutorialStep = 3; this.tutorialText.setText('\u041f\u043e\u0434\u043e\u0439\u0434\u0438\u0442\u0435 \u043a \u0433\u0440\u044f\u0434\u043a\u0435 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 E, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0438\u0442\u044c'); }
            }
        }

        let distanceToShop = Phaser.Math.Distance.Between(this.player.x, this.player.y, 1740, 780);
        if (distanceToShop < 180) {
            if (this.hasScarecrow) this.hintText.setText('\u041c\u0430\u0433\u0430\u0437\u0438\u043d: 1 - \u041a\u0443\u043f\u0438\u0442\u044c \u0441\u0435\u043c\u044f (15)');
            else this.hintText.setText('\u041c\u0430\u0433\u0430\u0437\u0438\u043d: 1 - \u0421\u0435\u043c\u044f (15) | 2 - \u041f\u0443\u0433\u0430\u043b\u043e (250)');

            if (Phaser.Input.Keyboard.JustDown(this.key1) && this.money >= 15) { 
                this.money -= 15; this.seeds += 1; this.updateUI(); this.flashText('\u0412\u044b \u043a\u0443\u043f\u0438\u043b\u0438 \u0441\u0435\u043c\u044f!'); 
                if(this.tutorialStep === 0) { this.tutorialStep = 1; this.tutorialText.setText('\u041f\u043e\u0434\u043e\u0439\u0434\u0438\u0442\u0435 \u043a \u0433\u0440\u044f\u0434\u043a\u0435 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 E, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u0430\u0434\u0438\u0442\u044c'); }
            }
            if (Phaser.Input.Keyboard.JustDown(this.key2) && !this.hasScarecrow && this.money >= 250) {
                this.money -= 250; this.hasScarecrow = true; this.updateUI(); this.flashText('\u0412\u044b \u043a\u0443\u043f\u0438\u043b\u0438 \u043f\u0443\u0433\u0430\u043b\u043e!');
                
                if (this.textures.exists('scarecrow')) {
                    this.bgLayer.add(this.add.image(960, 350, 'scarecrow').setDisplaySize(150, 150));
                } else {
                    let g = this.add.graphics();
                    g.fillStyle(0x8B4513, 1); g.fillRect(950, 200, 20, 150); 
                    g.fillStyle(0xf1c40f, 1); g.fillRect(910, 180, 100, 30); 
                    g.fillStyle(0xe74c3c, 1); g.fillCircle(960, 160, 30); 
                    this.bgLayer.add(g);
                }
                
                this.crowTimer.remove(); 
            }
        }

        this.plots.forEach(plot => {
            let distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, plot.x, plot.y);
            if (distance < 120) {
                let state = plot.getData('state'); let watered = plot.getData('watered'); let plant = plot.getData('plant');
                
                if (state === 'empty' && this.seeds > 0) {
                    this.hintText.setText('\u041d\u0430\u0436\u043c\u0438\u0442\u0435 E, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u0430\u0434\u0438\u0442\u044c \u0441\u0435\u043c\u044f');
                    if (Phaser.Input.Keyboard.JustDown(this.keyE)) {
                        this.seeds -= 1; this.updateUI(); plot.setData('state', 'planted'); plant.setTexture('sprout'); plant.setVisible(true);
                        let timer = this.time.delayedCall(30000, () => { if (plot.getData('state') === 'planted') { plot.setData('state', 'grown'); plant.setTexture('carrot'); } });
                        plot.setData('timer', timer); 
                        if(this.tutorialStep === 1) { this.tutorialStep = 2; this.tutorialText.setText('\u041f\u043e\u0434\u043e\u0439\u0434\u0438\u0442\u0435 \u043a \u0431\u043e\u0447\u043a\u0435 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 E, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0431\u0440\u0430\u0442\u044c \u0432\u043e\u0434\u044b'); }
                    }
                } else if (state === 'grown') {
                    this.hintText.setText('\u041d\u0430\u0436\u043c\u0438\u0442\u0435 E, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0431\u0440\u0430\u0442\u044c (+25)');
                    if (Phaser.Input.Keyboard.JustDown(this.keyE)) {
                        this.money += 25; this.updateUI(); plot.setData('state', 'empty'); plot.setData('watered', false); plant.setVisible(false); plot.setTexture('soil_dry');
                        if(this.tutorialStep === 3) { this.tutorialStep = 4; this.tutorialText.setText('\u0412\u044b \u0441\u043e\u0431\u0440\u0430\u043b\u0438 \u0443\u0440\u043e\u0436\u0430\u0439! \u0426\u0435\u043b\u044c - 700 \u043c\u043e\u043d\u0435\u0442.'); this.time.delayedCall(3000, () => { if(this.tutorialText) this.tutorialText.destroy(); }); }
                    }
                } else if (state === 'planted' && !watered && this.waterInHands) {
                     this.hintText.setText('\u041d\u0430\u0436\u043c\u0438\u0442\u0435 E, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0438\u0442\u044c');
                     if (Phaser.Input.Keyboard.JustDown(this.keyE)) {
                         let oldTimer = plot.getData('timer'); if (oldTimer) oldTimer.remove();
                         plot.setData('watered', true); plot.setTexture('soil_wet'); this.waterInHands = false; this.bucketSprite.setVisible(false);
                         let timer = this.time.delayedCall(15000, () => { if (plot.getData('state') === 'planted') { plot.setData('state', 'grown'); plant.setTexture('carrot'); } });
                         plot.setData('timer', timer);
                     }
                }
            }
        });
    }

    updateUI() { this.moneyText.setText('\u041c\u043e\u043d\u0435\u0442\u044b: ' + this.money); this.seedsText.setText('\u0421\u0435\u043c\u0435\u043d\u0430: ' + this.seeds); }
    flashText(message) { let txt = this.add.text(960, 500, message, { fontSize: '40px', color: '#ffff00', fontFamily: 'Courier New', stroke: '#000000', strokeThickness: 4 }).setOrigin(0.5); this.time.delayedCall(1500, () => txt.destroy()); }

    gameOver(reason) {
        this.isGameOver = true; 
        if(this.player && this.player.body) this.player.body.setVelocity(0); 
        if(this.crowTimer) this.crowTimer.remove();
        
        this.add.rectangle(960, 540, 1920, 1080, 0x000000, 0.8);
        if (this.textures.exists('ui_lose')) this.add.image(960, 540, 'ui_lose').setDisplaySize(800, 600); 
        else this.add.rectangle(960, 540, 800, 600, 0x2e5b24);
        
        this.add.text(960, 400, '\u041f\u041e\u0420\u0410\u0416\u0415\u041d\u0418\u0415', { fontSize: '100px', color: '#ff0000', fontFamily: 'Courier New', fontStyle: 'bold' }).setOrigin(0.5);
        this.add.text(960, 550, reason, { fontSize: '40px', color: '#ffffff', fontFamily: 'Courier New' }).setOrigin(0.5);
    }

    endDay() {
        this.isDayOver = true; 
        if(this.player && this.player.body) {
            this.player.body.setVelocity(0); 
            this.player.body.setAcceleration(0);
        }
        
        if (this.currentDay < this.maxDays) {
            this.add.text(960, 540, '\u0414\u0415\u041d\u042c \u0417\u0410\u041a\u041e\u041d\u0427\u0415\u041d', { fontSize: '100px', color: '#ff0000', fontFamily: 'Courier New', fontStyle: 'bold' }).setOrigin(0.5);
            this.time.delayedCall(2000, () => {
                this.currentDay++; this.dayText.setText('\u0414\u0435\u043d\u044c: ' + this.currentDay + ' / 3');
                this.timeLeft = 300; this.isDayOver = false;
                this.nightOverlay.setAlpha(0); 
                this.children.list.filter(x => x.type === 'Text' && x.text === '\u0414\u0415\u041d\u042c \u0417\u0410\u041a\u041e\u041d\u0427\u0415\u041d').forEach(x => x.destroy());
                
                this.wasd.W.isDown = false; this.wasd.A.isDown = false; this.wasd.S.isDown = false; this.wasd.D.isDown = false;
                this.cursors.up.isDown = false; this.cursors.left.isDown = false; this.cursors.down.isDown = false; this.cursors.right.isDown = false;
            });
        } else {
            this.add.rectangle(960, 540, 1920, 1080, 0x000000, 0.8);
            if (this.money >= 700) {
                if (this.textures.exists('ui_win')) this.add.image(960, 540, 'ui_win').setDisplaySize(800, 600); 
                else this.add.rectangle(960, 540, 800, 600, 0x2e5b24);
                this.add.text(960, 400, '\u041f\u041e\u0411\u0415\u0414\u0410!', { fontSize: '100px', color: '#00ff00', fontFamily: 'Courier New', fontStyle: 'bold' }).setOrigin(0.5);
                this.add.text(960, 550, '\u0412\u044b \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0438 ' + this.money + ' \u043c\u043e\u043d\u0435\u0442!', { fontSize: '40px', color: '#ffffff', fontFamily: 'Courier New' }).setOrigin(0.5);
            } else {
                if (this.textures.exists('ui_lose')) this.add.image(960, 540, 'ui_lose').setDisplaySize(800, 600); 
                else this.add.rectangle(960, 540, 800, 600, 0x2e5b24);
                this.add.text(960, 400, '\u041f\u041e\u0420\u0410\u0416\u0415\u041d\u0418\u0415', { fontSize: '100px', color: '#ff0000', fontFamily: 'Courier New', fontStyle: 'bold' }).setOrigin(0.5);
                this.add.text(960, 550, '\u0423 \u0412\u0430\u0441 \u0442\u043e\u043b\u044c\u043a\u043e ' + this.money + ' \u043c\u043e\u043d\u0435\u0442...', { fontSize: '40px', color: '#ffffff', fontFamily: 'Courier New' }).setOrigin(0.5);
            }
        }
    }

    triggerCrowAttack() {
        if (this.isDayOver || this.hasScarecrow || this.isGameOver || this.isPaused) return;
        this.scene.pause(); this.scene.launch('MinigameScene', { parent: this });
    }

    addReward() {
        this.scene.resume(); 
        this.crowTimer.reset({ delay: 30000, callback: this.triggerCrowAttack, callbackScope: this, loop: true });
    }

    penalty() {
        this.plots.forEach(plot => {
            let timer = plot.getData('timer'); if (timer) timer.remove(); 
            let plant = plot.getData('plant');
            plot.setData('state', 'empty'); plot.setData('watered', false); plot.setTexture('soil_dry'); plant.setVisible(false);
        });
        this.seeds = 0; this.updateUI(); this.scene.resume();
        this.crowTimer.reset({ delay: 30000, callback: this.triggerCrowAttack, callbackScope: this, loop: true });
    }
}

// ==========================================
// 5. Ã»Õ»-»√–¿
// ==========================================
class MinigameScene extends Phaser.Scene {
    constructor() { super({ key: 'MinigameScene' }); }
    init(data) { this.parentScene = data.parent; }

    create() {
        this.add.rectangle(960, 540, 1920, 1080, 0x000000, 0.8);
        this.add.text(960, 100, '\u041f\u0420\u041e\u0413\u041e\u041d\u0418 \u0412\u041e\u0420\u041e\u041d!', { fontSize: '70px', color: '#ff0000', fontFamily: 'Courier New', fontStyle: 'bold' }).setOrigin(0.5);
        this.add.text(960, 200, '\u041a\u043b\u0438\u043a\u0430\u0439\u0442\u0435 \u043f\u043e \u0432\u043e\u0440\u043e\u043d\u0430\u043c!', { fontSize: '40px', color: '#ffffff', fontFamily: 'Courier New' }).setOrigin(0.5);

        this.score = 0; this.maxCrows = 7; 
        this.scoreText = this.add.text(50, 50, '\u041f\u0440\u043e\u0433\u043d\u0430\u043d\u043e: 0/' + this.maxCrows, { fontSize: '48px', color: '#ffffff', fontFamily: 'Courier New' });
        this.timeLeft = 5;
        
        this.timerText = this.add.text(1350, 50, '\u0412\u0440\u0435\u043c\u044f: 5', { fontSize: '48px', color: '#ff0000', fontFamily: 'Courier New' });

        this.time.addEvent({ delay: 350, callback: this.spawnCrow, callbackScope: this, loop: true });

        this.timeEvent = this.time.addEvent({
            delay: 1000,
            callback: () => {
                if (this.score >= this.maxCrows) return;
                this.timeLeft--; this.timerText.setText('\u0412\u0440\u0435\u043c\u044f: ' + this.timeLeft);
                if (this.timeLeft <= 0) {
                    this.timeEvent.remove();
                    if (this.textures.exists('ui_lose')) this.add.image(960, 540, 'ui_lose').setDisplaySize(800, 600);
                    this.add.text(960, 540, '\u0412\u0421\u0415 \u041f\u041e\u0421\u0415\u0412\u042b \u0423\u041d\u0418\u0427\u0422\u041e\u0416\u0415\u041d\u042b!', { fontSize: '80px', color: '#ff0000', fontFamily: 'Courier New', fontStyle: 'bold' }).setOrigin(0.5);
                    this.time.delayedCall(1500, () => { this.scene.stop(); this.parentScene.penalty(); });
                }
            }, loop: true
        });
    }

    spawnCrow() {
        if (this.score >= this.maxCrows) return;
        let randomX = Phaser.Math.Between(300, 1600); let randomY = Phaser.Math.Between(300, 800);
        let crow;
        if (this.textures.exists('crow')) {
            crow = this.add.image(randomX, randomY, 'crow').setDisplaySize(180, 180).setInteractive(); 
        } else {
            crow = this.add.container(randomX, randomY);
            let body = this.add.graphics(); body.fillStyle(0x8E44AD, 1); body.fillEllipse(0, 0, 120, 80); 
            let head = this.add.graphics(); head.fillStyle(0x8E44AD, 1); head.fillCircle(60, -20, 30); 
            let eye = this.add.graphics(); eye.fillStyle(0xffffff, 1); eye.fillCircle(70, -30, 10);
            crow.add([body, head, eye]); crow.setSize(120, 120); crow.setInteractive(); 
        }
        let escapeTimer = this.time.delayedCall(1200, () => { if (crow.active) crow.destroy(); });
        crow.on('pointerdown', () => {
            escapeTimer.remove(); crow.destroy(); this.score++;
            this.scoreText.setText('\u041f\u0440\u043e\u0433\u043d\u0430\u043d\u043e: ' + this.score + '/' + this.maxCrows);
            if (this.score >= this.maxCrows) {
                this.timeEvent.remove(); 
                if (this.textures.exists('ui_win')) this.add.image(960, 540, 'ui_win').setDisplaySize(800, 600);
                this.add.text(960, 540, '\u0423\u0420\u041e\u0416\u0410\u0419 \u0421\u041f\u0410\u0421\u0415\u041d!', { fontSize: '100px', color: '#00ff00', fontFamily: 'Courier New', fontStyle: 'bold' }).setOrigin(0.5);
                this.time.delayedCall(1500, () => { this.scene.stop(); this.parentScene.addReward(); });
            }
        });
    }
}

const config = {
    type: Phaser.AUTO, width: 1920, height: 1080, backgroundColor: '#1a1a2e',
    pixelArt: true, 
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    physics: { default: 'arcade', arcade: { gravity: { y: 0 }, debug: false } },
    scene: [MenuScene, IntroScene, GameScene, PauseScene, MinigameScene]
};

const game = new Phaser.Game(config);