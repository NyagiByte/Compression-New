const NixieTube = Java.loadClass("com.simibubi.create.content.redstone.nixieTube.NixieTubeBlockEntity")
const PulseTimer = Java.loadClass("com.simibubi.create.content.redstone.diodes.BrassDiodeBlockEntity")

Ponder.tags((e) => {e.createTag("compression:spelunkery", "spelunkery:raw_magnetite", "Spelunkery", "ROCK AND STONE!", ["spelunkery:rock_salt_block", "spelunkery:carved_nephrite", "spelunkery:nephrite_siphon", "spelunkery:nephrite_fountain", "spelunkery:nephrite_diode"])});

Ponder.registry((e) => {

    e.create("spelunkery:rock_salt_block")
        .scene("luminar_salt", "Salt Lamps", "kubejs:deepslate_9x9", (scene, util) => {
            scene.showBasePlate();
            scene.idle(10);

            const stages = [
                [[4,1,3], [3,1,4], [5,1,4], [4,1,5]],
                [[4,1,2], [5,1,3], [6,1,4], [5,1,5], [4,1,6], [3,1,5], [2,1,4], [3,1,3]],
                [[4,1,1], [5,1,2], [6,1,3], [7,1,4], [6,1,5], [5,1,6], [4,1,7], [3,1,6], [2,1,5], [1,1,4], [2,1,3], [3,1,2]],
                [[5,1,1], [6,1,2], [7,1,3], [7,1,5], [6,1,6], [5,1,7], [3,1,7], [2,1,6], [1,1,5], [1,1,3], [2,1,2], [3,1,1]],
                [[6,1,1], [7,1,2], [7,1,6], [6,1,7], [2,1,7], [1,1,6], [1,1,2], [2,1,1]],
                [[1,1,1], [7,1,1], [7,1,7], [1,1,7]]
            ];
            scene.world.setBlock([4,1,4], "minecraft:redstone_lamp", false);
            scene.world.setBlock([4,2,4], "minecraft:lever", false);
            scene.world.modifyBlock([4,2,4], (lever) => lever.with("face", "floor"), false)
            scene.world.showSection([4,1,4 , 4,2,4], Facing.down)
            scene.idle(5)
            stages.forEach((stage) => {
                stage.forEach((pos) => {
                    scene.world.setBlock(pos, "spelunkery:rock_salt_block", false)
                    scene.world.showSection(pos, Facing.down)
                })
                scene.idle(3)
            })

            scene.idle(10);
            scene.text(60, "When luminar salt is placed in contact with a light source...", [5,1.5,5]).placeNearTarget();
            scene.idle(65)
            scene.addKeyframe()
            scene.idle(10)
            scene.world.modifyBlock([4,2,4], (lever) => lever.with("powered", "true").with("face", "floor"), false)
            scene.effects.indicateRedstone([4,2,4])
            scene.world.modifyBlock([4,1,4], (lamp) => lamp.with("lit", "true"), false)
            

            stages.forEach((stage) => {
                stage.forEach((pos) => {
                    scene.world.modifyBlock(pos, (pos) => pos.with("illuminated", "true"), false)
                })
                scene.idle(1)
            })
            scene.text(60, "It will become illuminated!", [4,1.5,4]).placeNearTarget();
            scene.idle(70);
            scene.text(80, "Removing the light source will de-illuminate the blocks shortly after.", [4,1.5,4]).placeNearTarget();
            scene.idle(10)
            scene.world.modifyBlock([4,2,4], (lever) => lever.with("powered", "false").with("face", "floor"), false)
            scene.world.modifyBlock([4,1,4], (lamp) => lamp.with("lit", "false"), false)
            scene.idle(20)
            stages.forEach((stage) => {
                stage.forEach((pos) => {
                    scene.world.modifyBlock(pos, (pos) => pos.with("illuminated", "false"), false)
                })
            })
            scene.idle(75)

            scene.world.hideSection([1,1,1, 7,2,7], Facing.up)
            scene.idle(10);
            scene.world.setBlocks([1,1,1, 7,2,7], "minecraft:air", false)
            scene.addKeyframe();
            scene.idle(10)
            const saltSpiral = [[4,1,5], [4,1,6], [3,1,6], [2,1,6], [2,1,5], [2,1,4], [2,1,3], [2,1,2], [3,1,2], [4,1,2], [5,1,2], [6,1,2], [6,1,3], [6,1,4], [6,1,5], [6,1,6]]
            saltSpiral.forEach((pos) =>{
                scene.world.setBlock(pos, "spelunkery:rock_salt_block", false)
                scene.world.showSection(pos, Facing.down)
                scene.idle(2)
            })
            scene.text(150, "The illumination spreads by direct contact, for an amount of blocks based on the source's light level (One less than the light's level).", [4,1.5,4]).placeNearTarget();
            scene.idle(15)
            scene.world.setBlock([4,1,4], "minecraft:redstone_torch", false);
            scene.world.showSection([4,1,4], Facing.down)
            scene.showControls(60, [4,2.5,4], "down").withItem(Item.of("minecraft:light", '{BlockStateTag:{level:"7"}}'));
            scene.idle(5)
            
            for(let i = 0;i<6;i++){
                scene.world.modifyBlock(saltSpiral[i], (salt) => salt.with("illuminated", "true"), false)
                scene.idle(1)
            }
            scene.idle(70)
            scene.world.setBlock([4,1,4], "minecraft:glowstone", true);
            scene.showControls(60, [4,2.5,4], "down").withItem(Item.of("minecraft:light", '{BlockStateTag:{level:"15"}}'));
            scene.idle(5)
            for(let i = 6;i<14;i++){
                scene.world.modifyBlock(saltSpiral[i], (salt) => salt.with("illuminated", "true"), false)
                scene.idle(1)
            }
            scene.idle(70)
            scene.world.hideSection([1,1,1, 7,2,7], Facing.up)
            scene.idle(15)
            scene.world.setBlocks([1,1,1, 7,2,7], "minecraft:air", false)
            scene.addKeyframe();
            scene.idle(5)

            scene.world.setBlock([5,1,6], "minecraft:glowstone", false)
            scene.world.setBlocks([5,1,2, 5,1,5], "spelunkery:rock_salt_block", false)
            scene.world.modifyBlocks([5,1,2, 5,1,5], (salt) => salt.with("illuminated", "true"), false)
            scene.world.showSection([5,1,2, 5,1,6], Facing.down)
            scene.idle(5)
            scene.world.setBlocks([4,1,2 , 4,1,5], "minecraft:comparator", false)
            scene.world.modifyBlocks([4,1,2, 4,1,5], (cmp) => cmp.with("powered", true).with("facing", "east"), false)
            scene.world.showSection([4,1,2, 4,1,5], Facing.down)
            scene.idle(5)
            scene.world.setBlocks([3,1,2 , 3,1,5], "create:nixie_tube", false)
            scene.world.modifyBlocks([3,1,2 , 3,1,5], (nix) => nix.with("facing", "west"), false)
            
            scene.world.modifyBlockEntity([3,1,5], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(14);
                        nix.updateDisplayedStrings()
                    })
            scene.world.modifyBlockEntity([3,1,4], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(13);
                        nix.updateDisplayedStrings()
                    })
            scene.world.modifyBlockEntity([3,1,3], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(12);
                        nix.updateDisplayedStrings()
                    })
            scene.world.modifyBlockEntity([3,1,2], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(11);
                        nix.updateDisplayedStrings()
                    })
            scene.world.showSection([3,1,2 , 3,1,5], Facing.down)
            scene.text(90, "A comparator will emit a redstone signal based on the illumination level, which is NOT the light level.", [4,1.5,4]);
            scene.idle(100)
            scene.text(90, "The illumination level is the source's light level minus the amount of salt blocks in between.", [4,1.5,4]);
            scene.idle(100)
            scene.markAsFinished();
        })
        .scene("luminar_signal_decay", "Illumination Decay", "kubejs:deepslate_5x5", (scene, util) => {
            scene.showBasePlate()
            scene.idle(10);
            scene.world.setBlock([3,1,3], "minecraft:redstone_lamp", false)
            scene.world.modifyBlock([3,1,3], (lamp) => lamp.with("lit", "true"), false);
            scene.world.setBlock([3,2,3], "minecraft:lever", false)
            scene.world.modifyBlock([3,2,3], (lever) => lever.with("powered", "true").with("face", "floor"), false)
            scene.world.setBlock([2,1,3], "spelunkery:rock_salt_block", false)
            scene.world.modifyBlock([2,1,3], (salt) => salt.with("illuminated", "true"), false);
            scene.world.setBlock([2,1,2], "minecraft:comparator", false)
            scene.world.modifyBlock([2,1,2], (cmp) => cmp.with("facing", "south").with("powered", "true"), false);
            scene.world.setBlock([2,1,1], "create:nixie_tube", false)
            scene.world.modifyBlock([2,1,1], (nix) => nix.with("facing", "west"), false)
            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(14);
                        nix.updateDisplayedStrings()
                    })
            scene.world.showSection([2,1,1, 3,2,3], Facing.down)
            scene.idle(5)
            scene.text(90, "A lone salt block will de-illuminate immediately once the light source is cut.", [2,1.5,3]);
            scene.idle(60)
            scene.world.modifyBlock([3,2,3], (lever) => lever.with("powered", "false").with("face", "floor"), false)
            scene.idle(1)
            scene.world.modifyBlock([3,1,3], (lamp) => lamp.with("lit", "false"), false);
            scene.idle(1)
            scene.world.modifyBlock([2,1,3], (salt) => salt.with("illuminated", "false"), false);
            scene.idle(1)
            scene.world.modifyBlock([2,1,2], (cmp) => cmp.with("facing", "south").with("powered", "false"), false);
            scene.idle(1)
            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(0);
                        nix.updateDisplayedStrings()
                    })
            scene.idle(40)
            scene.addKeyframe()
            scene.idle(10)
            scene.world.setBlock([1,1,3], "spelunkery:rock_salt_block", false)
            scene.world.showSection([1,1,3], Facing.down)
            scene.idle(10)
            scene.text(100, "Something interesting happens if illuminated salt blocks are adjacent...", [1,1.5,3]);
            scene.idle(20)
            scene.world.modifyBlock([3,2,3], (lever) => lever.with("powered", "true").with("face", "floor"), false)
            scene.effects.indicateRedstone([3,2,3])
            scene.idle(1)
            scene.world.modifyBlock([3,1,3], (lamp) => lamp.with("lit", "true"), false);
            scene.idle(1)
            scene.world.modifyBlock([2,1,3], (salt) => salt.with("illuminated", "true"), false);
            scene.idle(1)
            scene.world.modifyBlock([2,1,2], (cmp) => cmp.with("facing", "south").with("powered", "true"), false);
            scene.world.modifyBlock([1,1,3], (salt) => salt.with("illuminated", "true"), false);
            scene.idle(1)
            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(14);
                        nix.updateDisplayedStrings()
                    })
            scene.idle(10)
            for(let i = 0;i<3;i++){
                scene.overlay.showOutline(PonderPalette.RED, "airgap", [2,1,1], 10);
                scene.idle(20)
            }
            scene.idle(10)
            scene.addKeyframe()
            scene.idle(10)
            scene.world.modifyBlock([3,2,3], (lever) => lever.with("powered", "false").with("face", "floor"), false)
            scene.idle(1)
            scene.world.modifyBlock([3,1,3], (lamp) => lamp.with("lit", "false"), false);
            scene.idle(2)

            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(12);
                        nix.updateDisplayedStrings()
                    })
            scene.idle(2)
            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(10);
                        nix.updateDisplayedStrings()
                    })
            scene.idle(2)
            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(8);
                        nix.updateDisplayedStrings()
                    })
            scene.idle(2)
            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(6);
                        nix.updateDisplayedStrings()
                    })
            scene.idle(2)
            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(4);
                        nix.updateDisplayedStrings()
                    })
            scene.idle(2)
            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(2);
                        nix.updateDisplayedStrings()
                    })
            scene.world.modifyBlock([2,1,3], (salt) => salt.with("illuminated", "false"), false);
            scene.idle(1)
            scene.world.modifyBlock([1,1,3], (salt) => salt.with("illuminated", "false"), false);
            scene.world.modifyBlock([2,1,2], (cmp) => cmp.with("facing", "south").with("powered", "false"), false);
            scene.idle(1)

            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(0);
                        nix.updateDisplayedStrings()
                    })
            scene.idle(20)
            scene.text(150, "The salt blocks will piggyback off eachother, creating a comparator output that gradually diminishes over the course of a few ticks!", [2,1.5,3]);
            scene.idle(160)
            scene.text(50, "Could be useful...", [2,1.5,3]);
            scene.idle(60)
            scene.markAsFinished();
        });

        e.create("spelunkery:carved_nephrite")
            .scene("carved_nephrite", "Dew of the Mountain", "kubejs:deepslate_5x5", (scene, util) => {
                scene.showBasePlate();
                scene.idle(10);
                scene.world.setBlock([2,1,2], "spelunkery:carved_nephrite", false)
                scene.world.showSection([2,1,2], Facing.down)
                scene.text(70, "Carved Nephrite blocks can store experience points.", [2,1.5,2]).placeNearTarget();
                scene.idle(80)
                scene.text(90, "Each block can store 100 XP points, enough to get to level 7, and then some.", [2,1.5,2]).placeNearTarget();
                var orbs = []
                for(let i = 0;i<25;i++){
                        for(let j = 0; j<4;j++){
                            var x = Math.random()*3+1;
                            var y = Math.random()*20+25;
                            var z = Math.random()*3+1;
                            orbs.push(scene.world.createEntity("minecraft:experience_orb", [x,y,z], o => {
                                o.load("{Pos:["+x+"d,"+y+"d,"+z+"d], Value:1}")
                            }))
                        }
                }
                scene.idle(70)
                for(let i = 0;i<25;i++){
                    scene.world.modifyEntity(orbs[i*4], o => o.discard())
                    scene.world.modifyEntity(orbs[i*4+1], o => o.discard())
                    scene.world.modifyEntity(orbs[i*4+2], o => o.discard())
                    scene.world.modifyEntity(orbs[i*4+3], o => o.discard())
                    scene.idle(1)
                }
                scene.idle(5)
                scene.addKeyframe()
                scene.idle(10)
                scene.text(80, "It can be filled with a nephrite siphon...", [2,1.5,2]).placeNearTarget();
                scene.showControls(80, [2,2.5,2], "down").withItem("spelunkery:nephrite_siphon");
                scene.idle(10)
                scene.world.modifyBlock([2,1,2], (xp) => xp.with("charge", "one_to_twenty"), false)
                scene.idle(20)
                scene.world.modifyBlock([2,1,2], (xp) => xp.with("charge", "twentyone_to_fourty"), false)
                scene.idle(20)
                scene.world.modifyBlock([2,1,2], (xp) => xp.with("charge", "sixtyone_to_eighty"), false)
                scene.idle(20)
                scene.world.modifyBlock([2,1,2], (xp) => xp.with("charge", "full"), false)
                scene.idle(20)
                scene.text(80, "...drained with a nephrite fountain...", [2,1.5,2]).placeNearTarget();
                scene.showControls(80, [2,2.5,2], "down").withItem("spelunkery:nephrite_fountain");
                scene.idle(10)
                scene.world.modifyBlock([2,1,2], (xp) => xp.with("charge", "sixtyone_to_eighty"), false)
                scene.idle(20)
                scene.world.modifyBlock([2,1,2], (xp) => xp.with("charge", "twentyone_to_fourty"), false)
                scene.idle(20)
                scene.world.modifyBlock([2,1,2], (xp) => xp.with("charge", "one_to_twenty"), false)
                scene.idle(20)
                scene.world.modifyBlock([2,1,2], (xp) => xp.with("charge", "empty"), false)
                scene.idle(20)
                scene.text(80, "...or transferred to/from with a nephrite diode.", [2,1.5,2]).placeNearTarget();
                scene.showControls(80, [2,2.5,2], "down").withItem("spelunkery:nephrite_diode");
                scene.idle(90)
                scene.text(80, "Those three have their own ponders, make sure you check them out!", [2,1.5,2]).placeNearTarget();
                scene.idle(90)
                scene.addKeyframe()
                scene.idle(10)
                scene.text(80, "Adjacent blocks will balance out their contents", [1,1.5,2]).placeNearTarget();
                scene.idle(30)
                scene.world.setBlock([1,1,2], "spelunkery:carved_nephrite", false)
                scene.world.modifyBlock([1,1,2], (xp) => xp.with("charge", "full"), false)
                scene.world.showSection([1,1,2], Facing.down)
                scene.idle(10)
                scene.world.modifyBlocks([1,1,2, 2,1,2], (xp) => xp.with("charge", "twentyone_to_fourty"), false)
                scene.idle(50)
                scene.text(80, "XP will also 'flow' downwards, if possible", [2,2.5,2]).placeNearTarget();
                scene.idle(30)
                scene.world.setBlock([2,2,2], "spelunkery:carved_nephrite", false)
                scene.world.modifyBlock([2,2,2], (xp) => xp.with("charge", "full"), false)
                scene.world.showSection([2,2,2], Facing.down)
                scene.idle(10)
                scene.world.modifyBlocks([1,1,2, 2,1,2], (xp) => xp.with("charge", "full"), false)
                scene.world.modifyBlock([2,2,2], (xp) => xp.with("charge", "empty"), false)
                scene.idle(50)
                scene.text(100, "Note: Actual transfers are not instant, XP needs a bit of time to flow from block to block.", [2,2.5,2]).placeNearTarget();
                scene.idle(100)
                scene.world.hideSection([1,1,2, 2,2,2], Facing.up)
                scene.idle(10)
                scene.world.setBlocks([1,1,2, 2,2,2], "minecraft:air", false)
                scene.addKeyframe()
                scene.idle(10)
                scene.world.setBlock([2,1,3], "spelunkery:carved_nephrite", false)
                scene.world.showSection([2,1,3], Facing.down)
                scene.idle(5)
                scene.world.setBlock([2,1,2], "minecraft:comparator", false)
                scene.world.modifyBlock([2,1,2], (cmp) => cmp.with("facing", "south"), false)
                scene.world.showSection([2,1,2], Facing.down)
                scene.idle(5)
                scene.world.setBlock([2,1,1], "create:nixie_tube", false)
                scene.world.modifyBlock([2,1,1], (nix) => nix.with("facing", "west"), false)
                scene.world.showSection([2,1,1], Facing.down)
                scene.idle(5)
                scene.text(110, "A comparator will output a signal based on the fill level of the block.", [2,1.5,2]).placeNearTarget();
                scene.idle(20)
                scene.world.modifyBlock([2,1,2], (cmp) => cmp.with("facing", "south").with("powered", "true"), false)
                scene.effects.indicateRedstone([2,1,2])
                scene.world.modifyBlock([2,1,3], (xp) => xp.with("charge", "one_to_twenty"), false)
                scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(2);
                        nix.updateDisplayedStrings()})
                scene.idle(20)
                scene.world.modifyBlock([2,1,3], (xp) => xp.with("charge", "twentyone_to_fourty"), false)
                scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(5);
                        nix.updateDisplayedStrings()})
                scene.idle(20)
                scene.world.modifyBlock([2,1,3], (xp) => xp.with("charge", "fourtyone_to_sixty"), false)
                scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(8);
                        nix.updateDisplayedStrings()})
                scene.idle(20)
                scene.world.modifyBlock([2,1,3], (xp) => xp.with("charge", "sixtyone_to_eighty"), false)
                scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(11);
                        nix.updateDisplayedStrings()})
                scene.idle(20)
                scene.world.modifyBlock([2,1,3], (xp) => xp.with("charge", "eightyone_to_ninetynine"), false)
                scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(14);
                        nix.updateDisplayedStrings()})
                scene.idle(20)
                scene.world.modifyBlock([2,1,3], (xp) => xp.with("charge", "full"), false)
                scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(15);
                        nix.updateDisplayedStrings()})
                scene.idle(20)
                scene.world.hideSection([2,1,1, 2,1,2], Facing.up)
                scene.idle(10)
                scene.addKeyframe()
                scene.idle(10)
                scene.text(80, "Breaking the block will spill the stored XP as orbs.", [2,1.5,3]).placeNearTarget();
                scene.idle(40)
                scene.world.setBlock([2,1,3], "minecraft:air", true)
                const orb = scene.world.createEntity("minecraft:experience_orb", [2.5, 1.1, 3.5], o => {
                        o.load("{Pos:[2.5d,1.1d,3.5d],Motion:[0.0d, 0.3d, -0.1d],Value:307}") //yes, i know the block can't store THAT much xp. it's just one orb, so it should be well visible.
                    })
                scene.idle(50)

                scene.markAsFinished();
            })

        e.create("spelunkery:nephrite_siphon")
            .scene("nephrite_siphon", "It sucks (experience)", "kubejs:deepslate_5x5", (scene, util) => {
                scene.showBasePlate();
                scene.idle(10);
                scene.world.setBlock([2,1,3], "spelunkery:carved_nephrite", false)
                scene.world.showSection([2,1,3], Facing.down)
                scene.idle(3)
                scene.world.setBlock([2,1,2], "spelunkery:nephrite_siphon", false)
                scene.world.showSection([2,1,2], Facing.down)
                scene.text(80, "The Nephrite Siphon absorbs XP and deposits it in adjacent carved nephrite blocks", [2,1.5,2]).placeNearTarget();
                scene.idle(90)
                scene.addKeyframe();
                scene.idle(10)
                

                for(let i = 0;i<100;i++){
                    scene.particles.simple(1, "smoke", [2.5,1.75,2.5]).density(5).motion([Math.random()/5-0.1, Math.random()/2-0.1, Math.random()/5-0.1]);
                }
                const stand = scene.world.createEntity("minecraft:skeleton", [2.5,1.5,2.5], b => {
                    b.load('{Pos: [2.5d, 1.5d, 2.5d], Rotation: [135.0f, 0.0f],ArmorItems:[{id:"immersiveengineering:armor_faraday_boots",Count:1},{id:"immersiveengineering:armor_faraday_leggings",Count:1},{id:"immersiveengineering:armor_faraday_chestplate",Count:1},{id:"minecraft:player_head",Count:1}]}')
                })

                
                scene.idle(10)
                scene.text(110, "It can absorb XP from players. Crouching will speed up the transfer significantly.", [2,2.5,2]).placeNearTarget();
                scene.idle(20)
                scene.world.modifyBlock([2,1,3], (xp) => xp.with("charge", "one_to_twenty"), false)
                scene.idle(20)
                scene.world.modifyBlock([2,1,3], (xp) => xp.with("charge", "twentyone_to_fourty"), false)
                scene.idle(20)
                scene.world.modifyBlock([2,1,3], (xp) => xp.with("charge", "fourtyone_to_sixty"), false)
                scene.idle(20)
                scene.world.modifyBlock([2,1,3], (xp) => xp.with("charge", "sixtyone_to_eighty"), false)
                scene.idle(20)
                
                for(let i = 0;i<100;i++){
                    scene.particles.simple(1, "smoke", [2.5,1.75,2.5]).density(5).motion([Math.random()/5-0.1, Math.random()/2-0.1, Math.random()/5-0.1]);
                }
                scene.world.modifyEntity(stand, (s => s.discard()))
                scene.idle(15)
                scene.addKeyframe()
                scene.idle(10)
                scene.text(70, "It can also absorb nearby XP orbs directly.", [2,2.5,2]).placeNearTarget();
                var values = [1,3,7,17,37,73,149,307,617,1237,2477] //These are the minimum values for each orb size. 
                    var orbs = []
                    values.forEach(xp => {
                        var x = Math.random()+2;
                        var y = Math.random()*10+25;
                        var z = Math.random()+2;
                        orbs.push(scene.world.createEntity("minecraft:experience_orb", [x,y,z], o => {
                            o.load("{Pos:["+x+"d,"+y+"d,"+z+"d], Value:"+xp+"}")
                        }))
                        scene.idle(2)
                    })
                    scene.idle(40)
                    orbs.forEach((orb) => {
                        scene.world.modifyEntity(orb, o => { o.discard() })
                        scene.idle(2)
                    })
                    scene.world.modifyBlock([2,1,3], (xp) => xp.with("charge", "full"), false)
                    scene.idle(10)


                scene.markAsFinished();
            })

        e.create("spelunkery:nephrite_fountain")
            .scene("nephrite_fountain", "...why is it a snake?", "kubejs:deepslate_5x5", (scene, util) => {
                scene.showBasePlate();
                scene.idle(5);
                scene.world.setBlock([3,1,2], "spelunkery:carved_nephrite", false)
                scene.world.modifyBlock([3,1,2], (xp) => xp.with("charge", "full"), false)
                scene.world.showSection([3,1,2], Facing.down)
                scene.idle(5)
                scene.world.setBlock([2,1,2], "spelunkery:nephrite_fountain", false)
                scene.world.modifyBlock([2,1,2], (snek) => snek.with("facing", "west"), false)
                scene.world.showSection([2,1,2], Facing.east)
                scene.idle(5)
                scene.world.setBlock([2,1,1], "minecraft:lever", false);
                scene.world.modifyBlock([2,1,1], (lever) => lever.with("face", "floor"), false)
                scene.world.showSection([2,1,1], Facing.down)
                scene.idle(5)
                scene.text(100, "The nephrite fountain can convert the charge in carved nephrite back to XP orbs.", [2,1.5,2]).placeNearTarget();
                scene.idle(110)
                scene.addKeyframe()
                scene.idle(10)
                scene.text(70, "To open it, give it a redstone signal.", [2,1.5,1]).placeNearTarget();
                scene.idle(30)
                for(let i = 0;i<100;i++){
                    scene.particles.simple(1, "smoke", [1,1.75,2.5]).density(5).motion([Math.random()/5-0.1, Math.random()/2-0.1, Math.random()/5-0.1]);
                }
                const stand = scene.world.createEntity("minecraft:skeleton", [1.5,1,2.5], b => {
                    b.load('{Pos: [1d, 1d, 2.5d], Rotation: [-90.0f, 0.0f],ArmorItems:[{id:"immersiveengineering:armor_faraday_boots",Count:1},{id:"immersiveengineering:armor_faraday_leggings",Count:1},{id:"immersiveengineering:armor_faraday_chestplate",Count:1},{id:"minecraft:player_head",Count:1}]}')
                })
                scene.idle(50)

                scene.world.modifyBlock([2,1,1], (lever) => lever.with("powered", "true").with("face", "floor"), false)
                scene.effects.indicateRedstone([2,1,1])
                scene.world.modifyBlock([2,1,2], (snek) => snek.with("facing", "west").with("powered", "true"), false)
                var orbs = []
                for(let i = 0;i<100;i++){
                    if(orbs.length > 5){
                        scene.world.modifyEntity(orbs.shift(), o => o.discard());
                    }
                    orbs.push(scene.world.createEntity("minecraft:experience_orb", [2.5, 1.1, 2.5], o => {
                        o.load("{Pos:[2.5d,1.1d,2.5d],Motion:[-0.5d, 0.5d, 0.0d],Value:1}")
                    }))
                    scene.idle(1)
                    switch (i) {
                        case 0:
                            scene.world.modifyBlock([3,1,2], (xp) => xp.with("charge", "eightyone_to_ninetynine"), false)
                            break;
                        case 20:
                            scene.world.modifyBlock([3,1,2], (xp) => xp.with("charge", "sixtyone_to_eighty"), false)
                            break;
                        case 40:
                            scene.world.modifyBlock([3,1,2], (xp) => xp.with("charge", "fourtyone_to_sixty"), false)
                            break;
                        case 60:
                            scene.world.modifyBlock([3,1,2], (xp) => xp.with("charge", "twentyone_to_fourty"), false)
                            break;
                        case 80:
                            scene.world.modifyBlock([3,1,2], (xp) => xp.with("charge", "one_to_twenty"), false)
                            break;
                        case 99:
                            scene.world.modifyBlock([3,1,2], (xp) => xp.with("charge", "empty"), false)
                            break;
                    
                        default:
                            break;
                    }
                }
                orbs.forEach(orb => {
                    scene.world.modifyEntity(orb, o => o.discard())
                    scene.idle(1)
                })
                scene.idle(5)
                scene.world.modifyBlock([2,1,1], (lever) => lever.with("powered", "false").with("face", "floor"), false)
                scene.world.modifyBlock([2,1,2], (snek) => snek.with("facing", "west").with("powered", "false"), false)
                scene.idle(5)
                for(let i = 0;i<100;i++){
                    scene.particles.simple(1, "smoke", [1,1.75,2.5]).density(5).motion([Math.random()/5-0.1, Math.random()/2-0.1, Math.random()/5-0.1]);
                }
                scene.world.modifyEntity(stand, (s => s.discard()))
                scene.idle(10)
                scene.markAsFinished();
            })

        e.create("spelunkery:nephrite_diode")
            .scene("nephrite_diode", "One-Way XP Pump", "kubejs:deepslate_5x5", (scene, util) => {
                scene.showBasePlate();
                scene.idle(5);
                scene.world.setBlock([2,1,2], "spelunkery:carved_nephrite", false)
                scene.world.modifyBlock([2,1,2], (xp) => xp.with("charge", "full"), false)
                scene.world.showSection([2,1,2], Facing.down)
                scene.idle(5)
                scene.world.setBlock([2,2,2], "spelunkery:nephrite_diode", false)
                scene.world.modifyBlock([2,2,2], (xp) => xp.with("facing", "down"), false)
                scene.world.showSection([2,2,2], Facing.down)
                scene.text(80, "The nephrite diode can transfer XP between carved nephrite blocks.", [2,2.5,2]).placeNearTarget();
                scene.idle(5)
                scene.world.setBlock([2,3,2], "spelunkery:carved_nephrite", false)
                scene.world.showSection([2,3,2], Facing.down)
                scene.idle(5)
                scene.world.setBlock([1,2,2], "minecraft:lever", false)
                scene.world.modifyBlock([1,2,2], (lever) => lever.with("facing", "west").with("face", "wall"), false)
                scene.world.showSection([1,2,2], Facing.east)                
                scene.idle(80)
                scene.addKeyframe()
                scene.idle(10)
                scene.text(100, "A redstone pulse will transfer one XP point between blocks in the direction of the arrow.", [1.5,2.5,2.5]).placeNearTarget();
                scene.idle(40)
                scene.effects.indicateRedstone([1,2,2])
                scene.world.modifyBlock([1,2,2], (lever) => lever.with("facing", "west").with("powered", "true").with("face", "wall"), false)
                scene.world.modifyBlock([2,2,2], (xp) => xp.with("facing", "down").with("powered", "true"), false)
                scene.world.modifyBlock([2,3,2], (xp) => xp.with("charge", "one_to_twenty"), false)
                scene.world.modifyBlock([2,1,2], (xp) => xp.with("charge", "eightyone_to_ninetynine"), false)
                scene.idle(70)
                scene.addKeyframe()
                scene.idle(10)
                scene.text(70, "Might need something faster...", [1.5,2.5,2.5]).placeNearTarget();
                scene.idle(40)
                scene.world.setBlock([1,2,2], "minecraft:air", true)
                scene.world.modifyBlock([2,2,2], (xp) => xp.with("facing", "down").with("powered", "false"), false)
                scene.world.hideSection([1,2,2], Facing.up)
                scene.idle(15)
                scene.world.setBlocks([0,1,2, 1,1,2], "spelunkery:polished_nephrite_bricks", false)
                scene.world.showSection([0,1,2, 1,1,2], Facing.down)
                scene.idle(5)
                scene.world.setBlock([1,2,2], "create:pulse_timer", false)
                scene.world.modifyBlock([1,2,2], (timer) => timer.with("facing", "west").with("powered", "true"), false)
                scene.world.setBlock([0,2,2], "minecraft:lever", false)
                scene.world.modifyBlock([0,2,2], (lever) => lever.with("powered", "true").with("face", "floor"), false)
                scene.world.showSection([0,2,2, 1,2,2], Facing.down)
                scene.idle(20)

                scene.world.modifyBlock([0,2,2], (lever) => lever.with("powered", "false").with("face", "floor"), false)
                scene.world.modifyBlockEntityNBT([1,2,2], timer => timer.ScrollValue = 2)
                scene.world.modifyBlock([1,2,2], (timer) => timer.with("facing", "west").with("powered", "false"), false)

                for(let i = 0;i<110;i++){
                    scene.world.modifyBlock([2,2,2], (xp) => xp.with("facing", "down").with("powered", "true"), false)
                    scene.world.modifyBlock([1,2,2], (timer) => timer.with("facing", "west").with("powering", "true"), false)                    
                    scene.idle(1)

                    switch (i) {
                        case 19:
                            scene.world.modifyBlock([2,1,2], (xp) => xp.with("charge", "sixtyone_to_eighty"), false)
                            scene.world.modifyBlock([2,3,2], (xp) => xp.with("charge", "twentyone_to_fourty"), false)
                            break;
                        case 39:
                            scene.world.modifyBlock([2,1,2], (xp) => xp.with("charge", "fourtyone_to_sixty"), false)
                            scene.world.modifyBlock([2,3,2], (xp) => xp.with("charge", "fourtyone_to_sixty"), false)
                            break;
                        case 59:
                            scene.world.modifyBlock([2,1,2], (xp) => xp.with("charge", "twentyone_to_fourty"), false)
                            scene.world.modifyBlock([2,3,2], (xp) => xp.with("charge", "sixtyone_to_eighty"), false)
                            break;
                        case 79:
                            scene.world.modifyBlock([2,1,2], (xp) => xp.with("charge", "one_to_twenty"), false)
                            scene.world.modifyBlock([2,3,2], (xp) => xp.with("charge", "eightyone_to_ninetynine"), false)
                            break;
                        case 98:
                            scene.world.modifyBlock([2,1,2], (xp) => xp.with("charge", "empty"), false)
                            scene.world.modifyBlock([2,3,2], (xp) => xp.with("charge", "full"), false)
                            break;
                    
                        default:
                            break;
                    }

                    scene.world.modifyBlock([2,2,2], (xp) => xp.with("facing", "down").with("powered", "false"), false)
                    scene.world.modifyBlock([1,2,2], (timer) => timer.with("facing", "west").with("powering", "false"), false)
                    scene.idle(1)
                }

                scene.world.modifyBlock([1,2,2], (timer) => timer.with("facing", "west").with("powered", "true"), false)
                scene.world.modifyBlock([0,2,2], (lever) => lever.with("powered", "true").with("face", "floor"), false)

                scene.idle(20)
                scene.markAsFinished();
            })

})