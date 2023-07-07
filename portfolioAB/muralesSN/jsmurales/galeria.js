"use strict"

//Repositorio de fotos

var showRoom;
var botonDerecha;
var botonIzquierda;
var numeroDeFoto;
var direccion;
var Fotos=[

            {
                "nombre":"Niña en Edificio 1",
                "src650":"./Images/Fotos/ninia1.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/350260766_1454663418605229_133717100288051309_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=ae0AgSzHZBYAX9q6Lyp&_nc_ht=scontent.fros2-1.fna&oh=00_AfD3A5O5hccQ4RBpQQsrvNIJ2zGHja26dHex4p_GpkdhRA&oe=64A9B444",
                "direccion":"Mitre y Sarmiento"
            
            },
            {
                "nombre":"Niña en Edificio 2",
                "src650":"./Images/Fotos/ninia2.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/350132309_3394776167505508_5055866830186949649_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=TcUY-B3mhKAAX97DEfE&_nc_ht=scontent.fros2-2.fna&oh=00_AfDyWfNjbrzEXp-DaR754oFeA0zKVGaOOwUOS5bhhvKPMA&oe=64AA3D92",
                "direccion":"Mitre y Sarmiento"
                
            },
            {
                "nombre":"Niña en Edificio 3",
                "src650":"./Images/Fotos/ninia3.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/350538946_915618856183895_8950046964280150507_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=wRGnAZsP0DsAX-JQN5u&_nc_ht=scontent.fros2-1.fna&oh=00_AfCDx7CDckBTnJHot1PVxYu6YsuIY87RwaKrNDotJU66xw&oe=64A91151",
                "direccion":"Mitre y Sarmiento"
                
            },
            {
                "nombre":"Niño en Edificio 1",
                "src650":"./Images/Fotos/ninio1.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/350507551_815025570270546_6064474192875719652_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=EFAp-UbR0AEAX-VRTFa&_nc_oc=AQmx8LQ96_LP8NjKaV8yqEhdp3ykzcKdTaIm6P91BUCR_0GvFwEXuBCti1FxmHKjGb8&_nc_ht=scontent.fros2-2.fna&oh=00_AfBbuVpJibi2mlfHkeOmgBJB3XCC04PRoPNjtrzOeD9_Iw&oe=64A99C9A",
                "direccion":"Mitre y Sarmiento"
            
            },
            {
                "nombre":"Niño en Edificio 2",
                "src650":"./Images/Fotos/ninio2.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/350295026_242137988422371_1594112602945313780_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=cKKhr5HeDZAAX9L1hce&_nc_ht=scontent.fros2-1.fna&oh=00_AfC2MIVd9brsgTa5QNW34vB_wAwKm0lTsL3ND_-W_vQg3Q&oe=64AA013A",
                "direccion":"Mitre y Sarmiento"
                
            },
            {
                "nombre":"Dinosaurios 1",
                "src650":"./Images/Fotos/dino1.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/350242060_213931218101399_5187702522806111020_n.jpg?stp=dst-jpg_s600x600&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=5WFrWnZMUykAX-Xl9p7&_nc_ht=scontent.fros2-1.fna&oh=00_AfD_0W0LmsZb1GP76wnITdCkKwDP_9orZi5VrjSQfgBOxA&oe=64AA18D6",
                "direccion":"San Martín y Mitre"
                
            },
            {
                "nombre":"Dinosaurios 2",
                "src650":"./Images/Fotos/dino2.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/350296989_1595466967529858_8472149472178375073_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=wjc0Moql6ZcAX8sfsBA&_nc_ht=scontent.fros2-2.fna&oh=00_AfClUA4nUAy6Q1X6CPTpBElRPvejzNXaEL2Ap1v9wDVteQ&oe=64A90635",
                "direccion":"San Martín y Mitre"
                
                },
            {
                "nombre":"Mariposa",
                "src650":"./Images/Fotos/mariposa.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/350304140_793794785596912_4231897506694423670_n.jpg?stp=dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=bzkEVRVfO7EAX9pCUpE&_nc_ht=scontent.fros2-1.fna&oh=00_AfD2nekJSljCCUUW94aRUgVLyuAfluhAs82DJdbIucDZfA&oe=64AA0897",
                "direccion":"9 de julio y mitre"
                
            },
            {
                "nombre":"Chica de Lente",
                "src650":"./Images/Fotos/chicalente.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/350124994_711073490820550_5680756001898344303_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=hzUfP0bC8qMAX_hwJqA&_nc_ht=scontent.fros2-1.fna&oh=00_AfBWpm6OxFqH51-40pQ3Jw1cZWEfrXdaKj3Td1VsY35ojQ&oe=64A918BD",
                "direccion":"Italia y Pellegrini"
                
            },
            {
                "nombre":"Imagen de la ciudad",
                "src650":"./Images/Fotos/catedral.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/350125441_574827728101048_6035174412772049962_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=n-smn-SV5X0AX_wRkRn&_nc_ht=scontent.fros2-1.fna&oh=00_AfA9a8rROBApvtmp9tX66zjcbx_n7Qh0ESsLt_tHIpG5wg&oe=64A970BC",
                "direccion":"Catedral de San Nicolás, Guarda Nacionales 36"
            
            },
            {
                "nombre":"Corazón",
                "src650":"./Images/Fotos/corazon1.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/350357135_2328293907450379_8042012823413401535_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=j19vzcxm3TQAX8XPAGz&_nc_ht=scontent.fros2-2.fna&oh=00_AfA1TNfttiV8ZfHpWs_4SHrFgfHFtXjM0coHSo-iOYpjQg&oe=64A8DEA4",
                "direccion":"Escaleras de Belgrano, Belgrano y Guardias Nacionales"
                
            },
            {
                "nombre":"Corazón 2",
                "src650":"./Images/Fotos/corazon2.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/350664344_610652351004969_7286361885534920359_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=cjfCpKZ8wOsAX8V2V4n&_nc_ht=scontent.fros2-1.fna&oh=00_AfBqMNG7aBycgN2yV_RAAq02_wqqW7c6G0k76_P3Il6XWA&oe=64A92F90",
                "direccion":"Escaleras de Belgrano, Belgrano y Guardias Nacionales"
                
            },

            {
                "nombre":"Mujer saliendo de pared",
                "src650":"./Images/Fotos/chicalente2.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/350521501_239072608767117_66874200075544756_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=mAahjkdIQpUAX_oRjjT&_nc_ht=scontent.fros2-1.fna&oh=00_AfCr7b_yMImJc6aM-WQxK8lS11p6u71tlovr3wcUA08lxw&oe=64A951FC",
                "direccion":"Francia y Lavalle"
            
            },
            {
                "nombre":"Mujer saliendo de pared 2",
                "src650":"./Images/Fotos/calaberachica.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/350283892_1458573614909829_4756850805479437100_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=0ICPkfHR9YYAX_qcqhG&_nc_ht=scontent.fros2-1.fna&oh=00_AfDoV1cnHyvFerMzSxs0LC03DEpMxxYFm5z82SWw5bSMcQ&oe=64AA185E",
                "direccion":"Francia y Lavalle"
                
            },
            {
                "nombre":"Anciano",
                "src650":"./Images/Fotos/viejo.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/350281849_1441143043336757_4538235620208927116_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=gVP91PkyKagAX-7FPUL&_nc_ht=scontent.fros2-1.fna&oh=00_AfA9x_3mnKxUY705ytQO_lQ0K867aesIKZoA7EbRmU8Mcw&oe=64A9E88D",
                "direccion":"Lavalle y San Martín"
                
            },
            {
                "nombre":"Messi y Maradona",
                "src650":"./Images/Fotos/messi.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/357430319_304213638620703_8194246671779834620_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=5KyIg7TzLJEAX_HXlce&_nc_ht=scontent.fros2-2.fna&oh=00_AfDKrNe6oOoySB3VDKQl5LUwx-JtaBg5QluCzAR0qtddCg&oe=64A9EBC4",
                "direccion":"Lavalle 150-200"
            
            },
            {
                "nombre":"Tortuga",
                "src650":"./Images/Fotos/tortuga.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/357529648_304216285287105_6082637339826067667_n.jpg?stp=dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=LmNpsReI94AAX8-_nom&_nc_ht=scontent.fros2-2.fna&oh=00_AfBCA0N_yHbUGY7j3oo5CNV0RM3-yIDVxFHMVJ1-CdGG0w&oe=64A90CAE",
                "direccion":"Lavalle 250-300"
                
            },
            {
                "nombre":"Elefante 1",
                "src650":"./Images/Fotos/elefante.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/357444722_304217031953697_6557148579418429444_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=NgglHOzXsjsAX8k6SwI&_nc_oc=AQlpb4K5zLb4a2ijkwpe-Cp1rEcVMr2aFOZe3pPJ5PyHbBvI-nixMI_ADm5eJCOVydU&_nc_ht=scontent.fros2-2.fna&oh=00_AfBKOCv1xWvCDzZBGmFipXLWUj8tcUgNYbmnVXrqjRObww&oe=64A8B34A",
                "direccion":"Belgrano y San Martín"
                
            },
            {
                "nombre":"Peces",
                "src650":"./Images/Fotos/peces.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/357386144_304217915286942_8864545334160668906_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=LUkX_gno_rwAX8eSsCw&_nc_ht=scontent.fros2-1.fna&oh=00_AfBC3aSHpyn-De02zVQExcahmBG2eH11es_mkuDcg3e8cw&oe=64A8F36D",
                "direccion":"Belgrano y Chacabuco"
                
                },
            {
                "nombre":"ojos",
                "src650":"./Images/Fotos/ojos.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/357408554_304218585286875_7944928594614515927_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=gevmICz7YMcAX-9CeVJ&_nc_ht=scontent.fros2-1.fna&oh=00_AfANHacGgJXBojkaQGU_7w4LA5LSiGjDHT0Psnsmt6igKA&oe=64AA43BD",
                "direccion":"Belgrano 350-400"
                
            },
            {
                "nombre":"reloj",
                "src650":"./Images/Fotos/reloj.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/357580803_304218698620197_4206635613693741451_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=DO1QdwJF6NoAX9mt3yT&_nc_ht=scontent.fros2-1.fna&oh=00_AfBpF4ggPROz-dhBEfSewFEo5c6G-YZhCBXb7mpMH3Htbg&oe=64A9776D",
                "direccion":"Belgrano 350-400"
                
            },
            {
                "nombre":"Mujer y gato",
                "src650":"./Images/Fotos/chica_gato.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/357386650_304221801953220_5999603008845082074_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=pFxvOGkke10AX9JEWNh&_nc_ht=scontent.fros2-1.fna&oh=00_AfDeBWLbEzOWxDv8dRZxMhOocnHj9Jr2YDXC03UZsOGesQ&oe=64A9DB89",
                "direccion":"Lavalle 300-350"
            
            },
            {
                "nombre":"Murales varios",
                "src650":"./Images/Fotos/varios.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/357387439_304226898619377_7333490704591155179_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=LyYJEHezdEAAX8JN_aK&_nc_ht=scontent.fros2-2.fna&oh=00_AfC_35a9Q5AdSDXUl4E-sEvPuJEN5IUmujOFNoOArFBNqA&oe=64A9D94A",
                "direccion":"Garibaldi y Almafuerte (Antiguo CEMAC)"
                
            },
            {
                "nombre":"Pueblos originarios",
                "src650":"./Images/Fotos/pporiginario.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/357700452_304232288618838_8513740272327086049_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=U3w_v2D2NEgAX8mcsWz&_nc_ht=scontent.fros2-1.fna&oh=00_AfA4f071IwUfYnLfIad1JFPF6dXpegJC28Y3L6D3CYqQRg&oe=64A9758D",
                "direccion":"Plaza de los inmigrantes"
                
            },
            {
                "nombre":"Petrona Simonino",
                "src650":"./Images/Fotos/petrona.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/357477558_304232858618781_7803294579347957624_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=5owthaqGyoQAX8eiuF5&_nc_ht=scontent.fros2-1.fna&oh=00_AfD6o9y0p7bA0qgQYIiQC3AAnhSavYvyXin4LVoT14_EHw&oe=64A96B77",
                "direccion":"UTN San Nicolás"
            
            },
            {
                "nombre":"Centenario de la reforma",
                "src650":"./Images/Fotos/centenario.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/357390975_304232888618778_6556929732291269523_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=A-_oebmdy4wAX9-z9_J&_nc_ht=scontent.fros2-2.fna&oh=00_AfAHqmrY3J3ScCxsFtuUptZJZ125xM1qgqkUv-lL-8QvMA&oe=64A952E9",
                "direccion":"UTN San Nicolás"
                
            },
            {
                "nombre":"Soldador",
                "src650":"./Images/Fotos/soldador.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/357466124_304233411952059_7320320919096509393_n.jpg?stp=dst-jpg_s600x600&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=0HSPjOdiKxsAX_EspOL&_nc_ht=scontent.fros2-1.fna&oh=00_AfBAJadcTkfK7JSDy31esdBN9UbWydGhHo6bnntp7jN3oQ&oe=64A9B1B1",
                "direccion":"Falcón y Além"
                
            },
            {
                "nombre":"Mujer, niño y ciudad",
                "src650":"./Images/Fotos/chicachico.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/357483830_304233535285380_1740431297695037643_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=0_lbLSZ2N-wAX_yueso&_nc_ht=scontent.fros2-2.fna&oh=00_AfAe1EcXHcwDO1Mjp6eKAtQd_UgxryvL1wtXTtj6VwXRMA&oe=64A9D3E2",
                "direccion":"Falcón y Além"
            
            },
            {
                "nombre":"Mujer pintando",
                "src650":"./Images/Fotos/mujerpincel.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/357409271_304233638618703_3967458740533643771_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=p6jEZlNhXCgAX9Hwhwm&_nc_ht=scontent.fros2-1.fna&oh=00_AfDRfCkqkP_KTVHBVnDxMcKeBp3BbY8cic5bZHUOIgx_3A&oe=64A95299",
                "direccion":"Falcón y Além"
                
            },
            {
                "nombre":"Mujer pintando ciudad",
                "src650":"./Images/Fotos/chica_ciudad.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/357404630_304233478618719_4563701114859281613_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=8Wx5xovF10wAX9dFwlo&_nc_oc=AQli_ngjCXzVAL0BSUk_GHTBnmBj4ob_GiEUlQaljEUreI3w8gaR0r6c84UpgrodPv4&_nc_ht=scontent.fros2-1.fna&oh=00_AfAO84kJUaINloAqgsmnZhFpKANNX23NaP_tRyEIkRqKTw&oe=64AA5353",
                "direccion":"Falcón y Além"
                
            },
            {
                "nombre":"Plantas",
                "src650":"./Images/Fotos/plantas.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/357486503_304234938618573_6175245228594447440_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=MrvXNK7gtEIAX9-pvXf&_nc_ht=scontent.fros2-1.fna&oh=00_AfByWt_o9W0P6lj6AHi1CBadi9EZ2QFUnaVCevVbPOO97g&oe=64A99FD7",
                "direccion":"Juan B. Justo, entre Além y Colón"
                
                },
            {
                "nombre":"Mano y dibujos",
                "src650":"./Images/Fotos/manopared.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/357553391_304235245285209_1260832242072604396_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=3K1q4kMyHW0AX9Oez2d&_nc_ht=scontent.fros2-1.fna&oh=00_AfDHzJauW3qAjDOg1vhyZVHTW1haWMuQPwcabd4cMY5QAg&oe=64A8F2FA",
                "direccion":"Rivadavia y Falcón"
                
            },
            {
                "nombre":"Murales de Somisa 1",
                "src650":"./Images/Fotos/somisa1.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/357386767_304235648618502_4558971879777687992_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=lbRT-EA_s0QAX9HWlTF&_nc_ht=scontent.fros2-2.fna&oh=00_AfAXdVrm7zkS4IFRkaKEd2qTrspV6FdkwaHxlpiWh_5c6w&oe=64A9A32E",
                "direccion":"Barrio Somisa, Calle Frondizi"
                
            },
            {
                "nombre":"Murales de Somisa 2",
                "src650":"./Images/Fotos/somisa2.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/357381645_304235805285153_4930029160374126842_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=QPM5cLi8yZQAX_C7JDQ&_nc_ht=scontent.fros2-2.fna&oh=00_AfDVrVbqr1VxvwxGOrKELfQ8nSJg9WuS5S8959Fh7MqPOA&oe=64A9E454",
                "direccion":"Barrio Somisa, Calle Frondizi"
            
            },
            {
                "nombre":"Murales de Somisa 3",
                "src650":"./Images/Fotos/somisa3.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/357441585_304235675285166_3434118729775503326_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=_P-5LTME2i8AX_t8T6P&_nc_ht=scontent.fros2-2.fna&oh=00_AfDNv6Uq00-Qo96u5kDc7ZLpqem8Ml8YgYG9fTYA1EJKBw&oe=64A9F2C1",
                "direccion":"Barrio Somisa, Calle Frondizi"
                
            },
            {
                "nombre":"Murales de Somisa 4",
                "src650":"./Images/Fotos/somisa4.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/357415445_304235928618474_5065525969506948777_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=NfZF8B7g3h4AX_nxoxU&_nc_ht=scontent.fros2-2.fna&oh=00_AfBijbx_wm1-9f3UrgKgPLrGSvIfsyWgHXbHZJmgl17XZA&oe=64A9D170",
                "direccion":"Barrio Somisa, Calle Frondizi"
                
            },
            {
                "nombre":"Murales de Somisa 5",
                "src650":"./Images/Fotos/somisa5.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/357470626_304235835285150_4587494884659983115_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=imSZklpaN5YAX_d4u1d&_nc_ht=scontent.fros2-1.fna&oh=00_AfDVETBb4UGsBhou6G1XNa14cCUkHfMBMAdMJuEHSdY9Dw&oe=64A96D32",
                "direccion":"Barrio Somisa, Calle Frondizi"
            
            },
            {
                "nombre":"Mujer Fumando",
                "src650":"./Images/Fotos/fumadora.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/357429102_304236705285063_905971994755792825_n.jpg?stp=dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=zpYJbJOLpPYAX8Le3Dx&_nc_ht=scontent.fros2-1.fna&oh=00_AfDMYmycZAstQvCKmvNUKWK0YsL7B7ePuNwYo9yB9EITYw&oe=64A9EC58",
                "direccion":"Falcón y 25 de Mayo"
                
            },
            {
                "nombre":"Mono con lentes",
                "src650":"./Images/Fotos/monkey.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/357371653_304239085284825_5655873642565769864_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=ocTmbe8jWFMAX-m6oDI&_nc_ht=scontent.fros2-1.fna&oh=00_AfCZdPBnZe65EZKsMIrHyafJ5xZ6CxiSQ55YdOoxXXbrqA&oe=64A8D1A5",
                "direccion":"Falcón y Maipú"
                
            },
            {
                "nombre":"Rostro y libro",
                "src650":"./Images/Fotos/caralibro.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/357504154_304239881951412_288912235039656414_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=fC1QkIMnv3wAX_QRXcI&_nc_ht=scontent.fros2-2.fna&oh=00_AfCaLNexWNKI4neXbQaGLO6PoWU7CJO4lkj-rWUo21bDAw&oe=64A91709",
                "direccion":"América 100-150"
            
            },
            {
                "nombre":"Anciano y colores",
                "src650":"./Images/Fotos/viejo2.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/357510747_304240485284685_8085245371275767340_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=CLOYPypo7toAX-4tyzd&_nc_ht=scontent.fros2-2.fna&oh=00_AfANRsMXFWmN0GPAM3mOURdxA5KPUOgKB0IpbnPOMDmqpA&oe=64AA54D1",
                "direccion":"Epaña y Almafuerte"
                
            },
            {
                "nombre":"Mujeres",
                "src650":"./Images/Fotos/mujeres.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/357551071_304240811951319_8440776865832386538_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=cRQDWc7qvJsAX_7-ZFy&_nc_ht=scontent.fros2-2.fna&oh=00_AfAkkAAGPDH-H2qHYijVAg_qkYyB9y_M4UKv6D_dhnirSQ&oe=64A9F611",
                "direccion":"Epaña y Almafuerte"
                
            },
            {
                "nombre":"Mujer y pájaros",
                "src650":"./Images/Fotos/mujerpajaro.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/357497014_304240681951332_1583440487540398708_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=J--YFlnT7A0AX9G4sbJ&_nc_ht=scontent.fros2-1.fna&oh=00_AfAYwUcEx96prlH-aYz0DyXgD1Ft7DzT4SVAmH2anxElmA&oe=64A8C1C0",
                "direccion":"Epaña y Almafuerte"
                
                },
            {
                "nombre":"Mujer y niño",
                "src650":"./Images/Fotos/mujerniño.jpg",
                "src":"https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/357440843_304240778617989_3300683198335548162_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=EX_eV0CqRh0AX-_GYEr&_nc_ht=scontent.fros2-1.fna&oh=00_AfCXcessby1YKMa7QLSR6tkI8gMq3bptyg8OZvkBhqlR4A&oe=64AA4CF8",
                "direccion":"Epaña y Almafuerte"
                
            },
            {
                "nombre":"Soldado imperial",
                "src650":"./Images/Fotos/soldadoimperial.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/357369159_304241555284578_6041218493053491152_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=MAtmmAQBViQAX82xu6E&_nc_ht=scontent.fros2-2.fna&oh=00_AfA7gMuV_EckKYQHAnK8kXzPZiGi6Iu-tIC17eomqPwjfQ&oe=64A9B98D",
                "direccion":"España y Bolivar"
                
            },
            {
                "nombre":"Homero Simpsons",
                "src650":"./Images/Fotos/homerosimpsons.jpg",
                "src":"https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/357535495_304242418617825_1064977512573860741_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=kIAHm530AosAX-i9JrY&_nc_ht=scontent.fros2-2.fna&oh=00_AfDAKvRlIdfC0z9sjYhDM08-BYUUJ4EVzj4tEWnK11N2pA&oe=64A9D218",
                "direccion":"España y 25 de Mayo"
            
            },

            {
            "nombre":"Gorrión",
            "src650":"./Images/Fotos/gorriones.jpg",
            "src":"https://scontent.faep14-2.fna.fbcdn.net/v/t39.30808-6/357552378_304243271951073_3882607166945426872_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=EohyLeAc6ZkAX9NUQMv&_nc_ht=scontent.faep14-2.fna&oh=00_AfASPZsu0MGXwzcGEVZ1SwpvU7Xa3UUhx2pPTgZ1vdqZPg&oe=64A70BC7",
            "direccion":"calle Francia, a la altura del Santuario"
            }
        ]

var N=Fotos.length;


window.addEventListener('load',(event)=>{
    showRoom= document.getElementById("showRoom");
    botonIzquierda= document.getElementById("botonIzquierda");
    botonDerecha= document.getElementById("botonDerecha");
    direccion= document.getElementById("direccion");

    numeroDeFoto=0;

    botonDerecha.addEventListener('click',Derecha);
        botonIzquierda.addEventListener('click',Izquierda);
    CambiarFoto();





        })

function CambiarFoto()
        {
            showRoom.src=Fotos[numeroDeFoto].src650;
            showRoom.alt=Fotos[numeroDeFoto].nombre;
            direccion.innerHTML=Fotos[numeroDeFoto].direccion;
        
            
        }

function Izquierda()
{

     if (numeroDeFoto>0 )
     numeroDeFoto--;
       


     else if(numeroDeFoto==0)
     numeroDeFoto=N-1;
   
     CambiarFoto();


    }
function Derecha()
    {

        
         if ( numeroDeFoto<N-1)
         numeroDeFoto++;
    
         else if(numeroDeFoto==N-1)
         numeroDeFoto=0;
    
         CambiarFoto();
    
    
        }

        