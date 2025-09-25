// checklist.js
// Keeps everything client-side (no server needed)
// Data: morningData, afternoonData, nightData — pasted from your message

const morningData = [
  {"Pandal Name":"23 Pally Sarbojanin Durgotsab (S.24Pgs.)","Best Viewing Time":"Morning","Maps":"https://www.google.com/maps/place/23+Pally+Durga+Temple/@22.5254462,88.3440514,17z/data=!3m1!4b1!4m6!3m5!1s0x3a027737ce384779:0xa931de2cbb3defa2!8m2!3d22.5254462!4d88.3440514!16s%2Fg%2F1tdytsm6?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5254462,"Lng":88.3440514},
  {"Pandal Name":"64 Pally Durgotsab Committee","Best Viewing Time":"Morning","Maps":"https://www.google.com/maps/place/64+Pally+Durga+Pujo/@22.5205584,88.3475801,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277346d4d65c1:0xd3868d29d4cee885!8m2!3d22.5205584!4d88.3475801!16s%2Fg%2F11g7z0l464?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5205584,"Lng":88.3475801},
  {"Pandal Name":"66 Pally Sarbojanin Durgotsab Committee","Best Viewing Time":"Morning","Maps":"https://www.google.com/maps/place/66+Pally+Durga+Temple/@22.5196143,88.3478727,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277345f3e2d0f:0x8e2e2f0f4c8b2e0!8m2!3d22.5196143!4d88.3478727!16s%2Fg%2F11g7z0l464?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5196143,"Lng":88.3478727},
  {"Pandal Name":"Beltala Sarbojanin Durgotsab","Best Viewing Time":"Morning","Maps":"https://www.google.com/maps/place/Bhowanipore+Beltala+Sangha+Puja+Pandal+Site/@22.5254561,88.3440514,17z/data=!4m10!1m2!2m1!1sbeltala+durga+puja!3m6!1s0x3a0277007bf819cb:0x14b673abb24f3141!8m2!3d22.5257283!4d88.3483804!15sChJiZWx0YWxhIGR1cmdhIHB1amGSARBwbGFjZV9vZl93b3JzaGlwqgE7EAEyHxABIhs_FTZl1j7M5qMm3thw_2eCq5bm0h_PX5rj0qIyFhACIhJiZWx0YWxhIGR1cmdhIHB1amHgAQA!16s%2Fg%2F11wbzkv65v?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5257283,"Lng":88.3483804},
  {"Pandal Name":"Behala Pragati Sangha Durga Puja","Best Viewing Time":"Morning","Maps":"https://www.google.com/maps/place/Behala+Pragati+Sangha+Durga+Puja/@22.4183193,88.1284003,11z/data=!4m10!1m2!2m1!1spragati+sangha+durga+puja!3m6!1s0x3a027a0dab2341ef:0xbce8cb0d946b1042!8m2!3d22.4949781!4d88.3167081!15sChlwcmFnYXRpIHNhbmdoYSBkdXJnYSBwdWphWhsiGXByYWdhdGkgc2FuZ2hhIGR1cmdhIHB1amGSAQtzb2NpYWxfY2x1YpoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQyeEtXbEV5VmpOYU0wNXNXVlp3YjFSc1kzbFdSa2sxVm1wT1JGSnNSUkFCqgFSEAEqDiIKZHVyZ2EgcHVqYSgAMh8QASIbP7Byx3fUxxgf7kFZUldiGh6Q6u-7Mq5OZ2W4Mh0QAiIZcHJhZ2F0aSBzYW5naGEgZHVyZ2EgcHVqYeABAPoBBAgAEDk!16s%2Fg%2F11b61rb95m?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.4183193,"Lng":88.1284003},
  {"Pandal Name":"Shibmandir Sarbojanin Durgotsab Samiti","Best Viewing Time":"Morning","Maps":"https://www.google.com/maps/place/Shibmandir+Sarbojanin+Durgotsab+Samiti/@22.5068017,88.3398893,15z/data=!4m10!1m2!2m1!1sshivmandir+durga+puja!3m6!1s0x3a0270cbe5b2856b:0xf51855f3c4f17b8a!8m2!3d22.5109975!4d88.3498496!15sChVzaGl2bWFuZGlyIGR1cmdhIHB1amFaFyIVc2hpdm1hbmRpciBkdXJnYSBwdWphkgEUY3VsdHVyYWxfYXNzb2NpYXRpb26aASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTjRkV0pZZUhoM1JSQUKqAVgQASoZIhVzaGl2bWFuZGlyIGR1cmdhIHB1amEoADIeEAEiGj-wkm9FpJiG6qkUofGAvwl__z4AR_eFvKIaMhkQAiIVc2hpdm1hbmRpciBkdXJnYSBwdWph4AEA-gEECDwQIQ!16s%2Fg%2F11gblfptpm?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","__EMPTY":"Rabindra Sarovar metro station","Lat":22.5068017,"Lng":88.3398893},
  {"Pandal Name":"Tala Prattoy","Best Viewing Time":"Morning","Maps":"https://www.google.com/maps/place/Tala+Prattoy/@22.6096291,88.3809776,17z/data=!4m10!1m2!2m1!1stala+prattoy!3m6!1s0x3a02770011241479:0xa68349e421a73fc7!8m2!3d22.6104572!4d88.3846031!15sCgx0YWxhIHByYXR0b3mSARthc3NvY2lhdGlvbl9vcl9vcmdhbml6YXRpb26qATUQATIfEAEiG1w7YdT78GJwoChkgUM3k04doCdFhRtwJYmWwTIQEAIiDHRhbGEgcHJhdHRveeABAA!16s%2Fg%2F11wg28bnyw?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","__EMPTY":"Belagachia metro station. Only open from 8am-6pm from 25th sept","Lat":22.6096291,"Lng":88.3809776},
  {"Pandal Name":"Adi Ballygunge Sarbojanin Durga Puja","Best Viewing Time":"Morning","Maps":"https://www.google.com/maps/place/Adi+Ballygunge+Club/@22.5318029,88.3693454,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277f2b998fa7d:0xbd401f3b67f85d3f!8m2!3d22.531798!4d88.3719203!16s%2Fg%2F11frdnqcwx?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5318029,"Lng":88.3693454}
];

const afternoonData = [
  {"Pandal Name":"Agradut Udayan Sangha Durga Puja","Best Viewing Time":"Afternoon","Maps":"https://www.google.com/maps/place/Agradut+Udaya+Sangha/@22.5338257,88.3393693,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02774734e81e53:0xf4c2120b0328c1fd!8m2!3d22.5338208!4d88.3419442!16s%2Fg%2F11c1s8pm15?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5338257,"Lng":88.3393693},
  {"Pandal Name":"Babu Bagan Durga Puja","Best Viewing Time":"Afternoon","Maps":"https://www.google.com/maps/place/Babubagan+Durgotsav/@22.533869,88.3213446,14z/data=!4m10!1m2!2m1!1sbabu+bagan+durga+puja!3m6!1s0x3a027114b0cecd65:0xaa6dbaf7c2e3831b!8m2!3d22.5079875!4d88.3685745!15sChViYWJ1IGJhZ2FuIGR1cmdhIHB1amFaFyIVYmFidSBiYWdhbiBkdXJnYSBwdWphkgEUY3VsdHVyYWxfYXNzb2NpYXRpb26aASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTTFYemRwTUdOM0VBRaoBThABKg4iCmR1cmdhIHB1amEoADIfEAEiG3lbbar3HazUkbwH6PiEhxGxTYFv-Owh8nKWzDIZEAIiFWJhYnUgYmFnYW4gZHVyZ2EgcHVqYeABAPoBBAgAEEg!16s%2Fg%2F11gvzf1dns?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.533869,"Lng":88.3213446},
  {"Pandal Name":"Chetla Agrani Club Durga Puja","Best Viewing Time":"Afternoon","__EMPTY":"Rabindra Sarobar metro station","Maps":"https://www.google.com/maps/place/Chetla+Agrani+Club/@22.5172336,88.3315737,16z/data=!4m10!1m2!2m1!1sChetla+Agrani+Club+Durga+Puja!3m6!1s0x3a02774cc933a0cf:0xf16ff342ace01457!8m2!3d22.5163997!4d88.3368366!15sCh1DaGV0bGEgQWdyYW5pIENsdWIgRHVyZ2EgUHVqYVofIh1jaGV0bGEgYWdyYW5pIGNsdWIgZHVyZ2EgcHVqYZIBBGNsdWKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTllObVZwUkZkM0VBRaoBVhABKg4iCmR1cmdhIHB1amEoADIfEAEiGx_yTnV6cR2cOhxLZt9RiNLdKXra8efHstysuDIhEAIiHWNoZXRsYSBhZ3JhbmkgY2x1YiBkdXJnYSBwdWph4AEA-gEECAAQRg!16s%2Fg%2F1tk1ldp4?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5172336,"Lng":88.3315737},
  {"Pandal Name":"Falguni Sangha Durga Puja","Best Viewing Time":"Afternoon","Maps":"https://www.google.com/maps/place/Falguni+Sangha+Sarbojanin+Durga+puja+samity/@22.5222188,88.363305,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0276d424d3f5f3:0xece1e2d2d193726b!8m2!3d22.5222139!4d88.3658799!16s%2Fg%2F11dfgflnr6?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":"22.5222188","Lng":"88.363305"},
  {"Pandal Name":"Purbanchal Shakti Sangha Durgotsav Samity","Best Viewing Time":"Afternoon","Maps":"https://www.google.com/maps/place/Shakti+Sangha+Club's+Durga+Puja+Ground/@22.5047514,88.383205,17z/data=!4m10!1m2!2m1!1s%09Kasba+Shakti+Sangha+Pallybasi+Durgotsav+Samity!3m6!1s0x3a027135581e251b:0xbee53812001b8234!8m2!3d22.5047514!4d88.3879686!15sCi5LYXNiYSBTaGFrdGkgU2FuZ2hhIFBhbGx5YmFzaSBEdXJnb3RzYXYgU2FtaXR5WjAiLmthc2JhIHNoYWt0aSBzYW5naGEgcGFsbHliYXNpIGR1cmdvdHNhdiBzYW1pdHmSAQtldmVudF92ZW51ZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOR1oxbHFaWFJuUlJBQuABAPoBBAgAEBA!16s%2Fg%2F11fd7lhl0n?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5047514,"Lng":88.383205},
  {"Pandal Name":"Kheyali Sangha Durga Puja","Best Viewing Time":"Afternoon","Maps":"https://www.google.com/maps/place/Kheyali+Sangha+Club/@22.4558189,88.0629157,11z/data=!4m10!1m2!2m1!1sKheyali+sangha+durga+puja!3m6!1s0x3a0271b1f7a7ea0f:0x4bb0a6de6fe50e03!8m2!3d22.4558189!4d88.3677863!15sChlLaGV5YWxpIHNhbmdoYSBkdXJnYSBwdWphWhsiGWtoZXlhbGkgc2FuZ2hhIGR1cmdhIHB1amGSAQRjbHVimgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5QTmpadUxWVjNFQUWqAWEQASodIhlraGV5YWxpIHNhbmdoYSBkdXJnYSBwdWphKAAyHxABIhs_FRTdwFJhg0ZfwipJoZifHf-wjC62rGaFwi0yHRACIhlraGV5YWxpIHNhbmdoYSBkdXJnYSBwdWph4AEA-gEECBEQQw!16s%2Fg%2F11c605dknt?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":"22.4558189","Lng":"88.0629157"},
  {"Pandal Name":"N.S.C. Sports Club Durga Puja","Best Viewing Time":"Afternoon","Maps":"https://www.google.com/maps/place/N.S.C.+SPORTS+CLUB/@22.484389,88.3567869,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02710de4e45341:0xd28e687916129b0e!8m2!3d22.4843841!4d88.3593618!16s%2Fg%2F11g4jh_vm2?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":"22.484389","Lng":"88.3567869"},
  {"Pandal Name":"Paddapukur Barwari Samity","Best Viewing Time":"Afternoon","Maps":"https://www.google.com/maps/place/PADDAPUKUR+BAROWARI+DURGA+PUJA+PANDAL/@22.5318212,88.3518027,17z/data=!3m1!4b1!4m6!3m5!1s0x3a027748a230bfe5:0xc1be6f144c18a81d!8m2!3d22.5318163!4d88.3543776!16s%2Fg%2F11h7t4nw80?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":"22.5318212","Lng":"88.3518027"},
  {"Pandal Name":"Peyarabagan Sarbojanin Durgotsab","Best Viewing Time":"Afternoon","Maps":"https://www.google.com/maps/place/Peyara+Bagan+Durga+Puja/@22.5292734,88.3516579,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277256a693e95:0xccd5add95c1bf105!8m2!3d22.5292685!4d88.3542328!16s%2Fg%2F11fzf72_g1?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":"22.5292734","Lng":"88.3516579"},
  {"Pandal Name":"Santoshpur Lake Pally Durga Puja","Best Viewing Time":"Afternoon","__EMPTY":"Jyotirindra Nandi metro [Orange Line]","Maps":"https://www.google.com/maps/place/Santoshpur+Lake+Pally+Durga+Puja+Pandal/@22.4916363,88.3802955,17z/data=!4m10!1m2!2m1!1sSantoshpur+Lake+Pally+durga+puja!3m6!1s0x3a0271001cfb3e27:0x303e3f7b8d411614!8m2!3d22.4914713!4d88.3827705!15sCiBTYW50b3NocHVyIExha2UgUGFsbHkgZHVyZ2EgcHVqYVoiIiBzYW50b3NocHVyIGxha2UgcGFsbHkgZHVyZ2EgcHVqYZIBCGZlc3RpdmFsmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJZTm1KNlh6Um5SUkFCqgFZEAEqDiIKZHVyZ2EgcHVqYSgAMh8QASIbPxaILQVQgu8k9RwhpJrfzjY1RLGu0JgbIpxpMiQQAiIgc2FudG9zaHB1ciBsYWtlIHBhbGx5IGR1cmdhIHB1amHgAQD6AQQIABAY!16s%2Fg%2F11ltvxq9tt?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":"22.4916363","Lng":"88.3802955"},
  {"Pandal Name":"Santoshpur Trikon Park Durgotsab","Best Viewing Time":"Afternoon","Maps":"https://www.google.com/maps/place/Santoshpur+Trikon+Park+Durgotsab/@22.4931766,88.3759343,17z/data=!4m10!1m2!2m1!1sSantoshpur+Trikon+Park+Durgotsab!3m6!1s0x3a02713e1850c74b:0xaffa07324320d69d!8m2!3d22.4931559!4d88.3784752!15sCiBTYW50b3NocHVyIFRyaWtvbiBQYXJrIER1cmdvdHNhYloiIiBzYW50b3NocHVyIHRyaWtvbiBwYXJrIGR1cmdvdHNhYpIBDGhpbmR1X3RlbXBsZZoBJENoZERTVWhOTUc5blMwVkpRMEZuVFVOblp6aGlibnBSUlJBQqoBSRABMh8QASIbXsFGeVQqehfxVZ_7jNu3YNIxr8McgZV6NvfKMiQQAiIgc2FudG9zaHB1ciB0cmlrb24gcGFyayBkdXJnvdHNhYLgAQD6AQQIABAt!16s%2Fg%2F11b807yckt?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":"22.4931766","Lng":"88.3759343"},
  {"Pandal Name":"Behala Nutan Dal","Best Viewing Time":"Afternoon","__EMPTY":"Behala Chowrasta metro station and Sakherbazar metro station [Purple Line]","Maps":"https://www.google.com/maps/place/Behala+Nutan+Dal/@22.5002127,88.3177121,17z/data=!3m1!4b1!4m6!3m5!1s0x3a027a091884e2f5:0xeda7dc93f955e9f4!8m2!3d22.5002078!4d88.320287!16s%2Fg%2F11g9mfkbvz?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":"22.5002127","Lng":"88.3177121"},
  {"Pandal Name":"Rajdanga Naba Uday Sangha","Best Viewing Time":"Afternoon","__EMPTY":" Hemanta Mukhopadhay metro station or Kalighat metro station","Maps":"https://www.google.com/maps/place/Rajdanga+Naba+Uday+Sangha/@22.5166321,88.3876536,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0276b2b3107ed9:0xd35ddc049a639f57!8m2!3d22.5166272!4d88.3902285!16s%2Fg%2F11gbss8hw_?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":"22.5166321","Lng":"88.3876536"}
];

const nightData = [
  {"Pandal Name":"Patuli Sarbojanin Durgotsab","Best Viewing Time":"Nightlife","Maps":"https://www.google.com/maps/place/Baishnabghata+Patuli+Upanagari+Sarbojanin+Durgapuja+Ground/@22.4704234,88.385953,18z/data=!4m10!1m2!2m1!1sPatuli+durga+puja!3m6!1s0x3a02717674e95c11:0xc7fc0f94435cfd76!8m2!3d22.4704235!4d88.3872738!15sChFQYXR1bGkgZHVyZ2EgcHVqYVoTIhFwYXR1bGkgZHVyZ2EgcHVqYZIBFXJlbGlnaW91c19kZXN0aW5hdGlvbpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOWWEySkhPVlZSRUFFqgE6EAEyHxABIht6GkvyhhVHKviZlBkFR9_Jsb9jzsC2V9yKOTEyFRACIhFwYXR1bGkgZHVyZ2EgcHVqYeABAPoBBAgnEEU!16s%2Fg%2F11f147c_3d?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.4704234,"Lng":88.385953},
  {"Pandal Name":"Patuli Kendua Shanti Sangha","Best Viewing Time":"Nightlife","Maps":"https://www.google.com/maps/place/Kendua+Shanti+Sangha/@22.4719889,88.3766301,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02710b2646bc05:0x467e1acc52723dad!8m2!3d22.471984!4d88.381501!16s%2Fg%2F1tjhw1y4?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.4719889,"Lng":88.3766301},
  {"Pandal Name":"95 Pally Durga Puja","Best Viewing Time":"Nightlife","Maps":"https://www.google.com/maps/place/95+Pally+Association/@22.5082399,88.3601853,17z/data=!3m1!4b1!4m6!3m5!1s0x3a027129d8c8c381:0xe59f767b26bfbefa!8m2!3d22.508235!4d88.3627602!16s%2Fg%2F11ckqs8spm?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5082399,"Lng":88.3601853},
  {"Pandal Name":"Badamtala Ashar Sangha Durga Puja","Best Viewing Time":"Nightlife","Maps":"https://www.google.com/maps/place/Badamtala+Ashar+Sangha+Durgotsab/@22.5179717,88.3411496,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02770034b2c43f:0xe927c8d0bec44587!8m2!3d22.5179668!4d88.3437245!16s%2Fg%2F11wjdd_z8v?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5179717,"Lng":88.3411496},
  {"Pandal Name":"Ballygunge Cultural Association Durga Puja","Best Viewing Time":"Nightlife","__EMPTY":"Rabindra Sarovar metro station","Maps":"https://www.google.com/maps/place/Ballygunge+Cultural+Association+Durga+Puja/@22.5162171,88.353231,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277004f58677f:0x6b0e23aa0c96a063!8m2!3d22.5162122!4d88.3558059!16s%2Fg%2F11lv48xwd_?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5162171,"Lng":88.353231},
  {"Pandal Name":"Bosepukur Sitala Mandir","Best Viewing Time":"Nightlife","__EMPTY":"On main road but Kalighat metro station is nearest","Maps":"https://www.google.com/maps/place/Bosepukur+Sitala+Mandir/@22.519223,88.3822827,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0276b4fd6fec85:0xb383d0cf7fdb6bc8!8m2!3d22.5192181!4d88.3848576!16s%2Fg%2F1hc46hhgf?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.519223,"Lng":88.3822827},
  {"Pandal Name":"Deshapriya Park Durga Puja","Best Viewing Time":"Nightlife","__EMPTY":"Kalighat metro station","Maps":"https://www.google.com/maps/place/Deshapriya+Park+Durga+Puja+Area/@22.519306,88.3493064,17z/data=!4m10!1m2!2m1!1sDeshapriya+Park+Durga+Puja!3m6!1s0x3a027731a9a30c5d:0x799c6348d9403f4a!8m2!3d22.519306!4d88.35407!15sChpEZXNoYXByaXlhIFBhcmsgRHVyZ2EgUHVqYVociGQ==","Lat":22.519306,"Lng":88.3493064},
  {"Pandal Name":"Ekdalia Evergreen Club Durga Puja","Best Viewing Time":"Nightlife","__EMPTY":"Kalighat metro station","Maps":"https://www.google.com/maps/place/Ekdalia+Evergreen+Club/@22.5212236,88.363988,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0276d417b26201:0x220c3a4dbd7f651a!8m2!3d22.5212187!4d88.3665629!16s%2Fg%2F1pp2txnxj?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5212236,"Lng":88.363988},
  {"Pandal Name":"Hazra Park Durgotsab","Best Viewing Time":"Nightlife","Maps":"https://www.google.com/maps/place/Hazra+Park+Sarbojanin/@22.5245116,88.3434871,17z/data=!4m10!1m2!2m1!1sHazra+Park+Durgotsab!3m6!1s0x3a0277d62eb8ccbb:0xce6fbabf106ff3dc!8m2!3d22.5245794!4d88.3460705!15sChRIYXpyYSBQYXJrIER1cmdvdHNhYpI=","Lat":22.5245116,"Lng":88.3434871},
  {"Pandal Name":"Maddox Square","Best Viewing Time":"Nightlife","__EMPTY":"Jatin Das Park","Maps":"https://www.google.com/maps/place/%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A1%E0%A6%95%E0%A7%8D%E0%A6%B8+%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B0+%E0%A6%A6%E0%A7%82%E0%A6%B0%E0%A7%8D%E0%A6%97%E0%A6%BE+Maddox+Square+Durga+Pujo/@22.5263054,88.3520221,17z/data=!4m10!1m2!2m1!1sMaddox+Square!3m6!1s0x3a02772554053a63:0x257b3f0f56afec64!8m2!3d22.5265634!4d88.3546477!15sCg1NYWRkb3ggU3F1YXJlWg8iDW1hZGRveCBzcXVhcmWSARFjdWx0dXJhbF9sYW5kbWFya6oBNRABMh4QASIai9eQgKgY9KWm-byclhFJ8_bxj1UHjlG1UTgyERACIg1tYWRkb3ggc3F1YXJl4AEA!16s%2Fg%2F11j0hp9sdl?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5263054,"Lng":88.3520221},
  {"Pandal Name":"Mudiali Club Sarbojanin Durga Puja","Best Viewing Time":"Nightlife","__EMPTY":"Rabindra Sarovar metro station or Tollygunge metro station","Maps":"https://www.google.com/maps/place/Mudiali+Club+Durga+Puja+Pandal/@22.510194,88.336785,16z/data=!4m10!1m2!2m1!1sMudiali+Club+Sarbojanin+Durga+Puja!3m6!1s0x3a0270cbdf5173cd:0x5518c1c09c9335f0!8m2!3d22.510194!4d88.3463122!15sCiJNdWRpYWxpIENsdWIgU2FyYm9qYW5pbiBEdXJnYSBQdWphWiQiIm11ZGlhbGkgY2x1YiBzYXJib2phbmluIGR1cmdhIHB1amGSAQRjbHViqgFmEAEqGSIVc2FyYm9qYW5pbiBkdXJnYSBwdWphKAAyHxABIhuU9mocDnaJVQZo1GIUrjITDbSuWSIswhU-ZvUyJhACIiJtdWRpYWxpIGNsdWIgc2FyYm9qYW5pbiBkdXJnYSBwdWph4AEA!16s%2Fg%2F11xjbv0sk?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.510194,"Lng":88.336785},
  {"Pandal Name":"Naktala Udayan Sangha Durga Puja","Best Viewing Time":"Nightlife","Maps":"https://www.google.com/maps/place/Naktala+Udayan+Sangha/@22.4742978,88.3640149,17z/data=!3m1!4b1!4m6!3m5!1s0x3a027107aa5b8751:0x9999c634b4271a8f!8m2!3d22.4742929!4d88.3665898!16s%2Fg%2F1hm67fx6z?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.4742978,"Lng":88.3640149},
  {"Pandal Name":"New Alipore Suruchi Sangha Durga Puja","Best Viewing Time":"Nightlife","__EMPTY":"Kalighat and Rabindra Sarovar metro station","Maps":"https://www.google.com/maps/place/Suruchi+Sangha/@22.5089904,88.3313773,17z/data=!3m1!4b1!4m6!3m5!1s0x3a027112d9c0466f:0x21832239a8285502!8m2!3d22.5089855!4d88.3339522!16s%2Fg%2F124yfytbp?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5089904,"Lng":88.3313773},
  {"Pandal Name":"Samaj Sebi Sangha","Best Viewing Time":"Nightlife","__EMPTY":"Rabindra Sarovar metro station or Kalighat metro station","Maps":"https://www.google.com/maps/place/Samaj+Sebi+Sangha/@22.5157316,88.3537228,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02710006ffef83:0xac6faefbaf19d165!8m2!3d22.5157267!4d88.3562977!16s%2Fg%2F11lv47z9p2?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5157316,"Lng":88.3537228},
  {"Pandal Name":"Singhi Park Sarbojanin Durga Puja","Best Viewing Time":"Nightlife","__EMPTY":"Rabindra Sarovar metro","Maps":"https://www.google.com/maps/place/Singhi+Park+Sarbojanin+Durga+Puja+Committee/@22.5208474,88.3606722,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0276d5f6fa97af:0x310ce7fdfb83ca22!8m2!3d22.5208425!4d88.3632471!16s%2Fg%2F11b67g9mw4?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5208474,"Lng":88.3606722},
  {"Pandal Name":"Tridhara Sammilani Durga Puja","Best Viewing Time":"Nightlife","__EMPTY":"Kalighat Metro Station","Maps":"https://www.google.com/maps/place/Tridhara+Sammilani/@22.519556,88.3528166,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02772daca1f653:0xdbf590e266b01219!8m2!3d22.5195511!4d88.3553915!16s%2Fg%2F1pztdvrcx?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.519556,"Lng":88.3528166},
  {"Pandal Name":"Hindustan park","Best Viewing Time":"Nightlife","__EMPTY":"Rabindra Sarovar metro station or Kalighat metro station.","Maps":"https://www.google.com/maps/place/Hindusthan+Park+Sarbojanin+Durgotsab+Committee/@22.5176792,88.357308,17z/data=!4m10!1m2!2m1!1sHindustan+park+durga+puja!3m6!1s0x3a02772a91fd37a1:0x1ab320f3b9dc32dd!8m2!3d22.5176792!4d88.3620716!15sChlIaW5kdXN0YW4gcGFyayBkdXJnYSBwdWphWhsiGWhpbmR1c3RhbiBwYXJrIGR1cmdhIHB1amGSARRjdWx0dXJhbF9hc3NvY2lhdGlvbpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOWWREaG1ZVWxCRUFFqgFCEAEyHxABIhs_tUKCmPklyXR8veWLVI7X3nN2frbwbQ4y-jMyHRACIhloaW5kdXN0YW4gcGFyayBkdXJnYSBwdWph4AEA-gEECAAQPg!16s%2Fg%2F11c2lchv5c?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5176792,"Lng":88.357308},
  {"Pandal Name":"Jodhpur park","Best Viewing Time":"Nightlife","__EMPTY":"near Jadavpur Thana","Maps":"https://www.google.com/maps/place/Jodhpur+Park+Durga+Puja/@22.5044973,88.36295,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02712883ec2d13:0xb71eee21959d1a1d!8m2!3d22.5044924!4d88.3655249!16s%2Fg%2F124yh76k6?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5044973,"Lng":88.36295},
  {"Pandal Name":"Alipore Sarbajanin","Best Viewing Time":"Nightlife","__EMPTY":"Kalighat metro station","Maps":"https://www.google.com/maps/place/ALIPORE+SARBOJANIN/@22.5191802,88.3307899,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02774d352c8d97:0xcbc026ea6ea08682!8m2!3d22.5191753!4d88.3333648!16s%2Fg%2F11dz0qhjys?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D","Lat":22.5191802,"Lng":88.3307899}
];



// Utilities: merge, dedupe by name, mark premium from __EMPTY
function buildMasterList() {
  const combined = [...morningData, ...afternoonData, ...nightData];
  const map = new Map();
  combined.forEach(p => {
    const name = (p["Pandal Name"] || "").trim();
    if (!name) return;
    if (!map.has(name)) {
      map.set(name, {
        name,
        maps: p.Maps || "",
        premium: !!(p["__EMPTY"] && String(p["__EMPTY"]).trim()),
        raw: p
      });
    } else {
      // if already exists, keep premium true if any entry has it
      const existing = map.get(name);
      if (p["__EMPTY"] && String(p["__EMPTY"]).trim()) existing.premium = true;
      if (!existing.maps && p.Maps) existing.maps = p.Maps;
    }
  });
  return Array.from(map.values());
}

// DOM refs
const listEl = document.getElementById('pandalList');
const searchInput = document.getElementById('searchInput');
const selectAllBtn = document.getElementById('selectAll');
const deselectAllBtn = document.getElementById('deselectAll');
const openMapsBtn = document.getElementById('openMapsBtn');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const selectedCountEl = document.getElementById('selectedCount');

const STORAGE_KEY = 'pandalChecklistSelections_v1';
let masterList = buildMasterList();
let checkedSet = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));

// render list
function renderList(filter = '') {
  listEl.innerHTML = '';
  const q = String(filter || '').trim().toLowerCase();
  masterList.forEach(item => {
    if (q && !item.name.toLowerCase().includes(q)) return;

    const li = document.createElement('li');
    li.className = 'pandal-item' + (item.premium ? ' premium' : '');
    li.dataset.name = item.name;

    const left = document.createElement('div');
    left.className = 'pandal-left';

    const checkbox = document.createElement('button');
    checkbox.className = 'checkbox';
    checkbox.setAttribute('aria-pressed', checkedSet.has(item.name) ? 'true' : 'false');
    checkbox.innerHTML = checkedSet.has(item.name) ? '✓' : '';
    if (checkedSet.has(item.name)) {
      li.classList.add('checked');
      checkbox.classList.add('checked');
    }

    checkbox.addEventListener('click', () => {
      toggleItem(item.name, li, checkbox);
    });

    const labelWrap = document.createElement('div');
    labelWrap.className = 'label';

    const title = document.createElement('div');
    title.className = 'pandal-name';
    title.textContent = item.name;

    const sub = document.createElement('div');
    sub.className = 'pandal-sub';
    sub.textContent = item.raw && item.raw.__EMPTY ? String(item.raw.__EMPTY) : '';

    labelWrap.appendChild(title);
    if (sub.textContent) labelWrap.appendChild(sub);

    left.appendChild(checkbox);
    left.appendChild(labelWrap);

    li.appendChild(left);

    if (item.premium) {
      const badge = document.createElement('div');
      badge.className = 'premium-badge';
      badge.textContent = '★ PREMIUM';
      li.appendChild(badge);
    }

    // allow clicking label to toggle
    title.addEventListener('click', () => {
      toggleItem(item.name, li, checkbox);
    });

    listEl.appendChild(li);
  });

  updateSelectedCount();
}

function toggleItem(name, liEl, checkboxEl) {
  if (checkedSet.has(name)) {
    checkedSet.delete(name);
    liEl.classList.remove('checked');
    checkboxEl.classList.remove('checked');
    checkboxEl.innerHTML = '';
    checkboxEl.setAttribute('aria-pressed', 'false');
  } else {
    checkedSet.add(name);
    liEl.classList.add('checked');
    checkboxEl.classList.add('checked');
    checkboxEl.innerHTML = '✓';
    checkboxEl.setAttribute('aria-pressed', 'true');
  }
  persist();
  updateSelectedCount();
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(checkedSet)));
}

function updateSelectedCount() {
  selectedCountEl.textContent = checkedSet.size;
}

// Search handler
searchInput.addEventListener('input', e => {
  renderList(e.target.value);
});

// Select all / Deselect all
selectAllBtn.addEventListener('click', () => {
  masterList.forEach(i => checkedSet.add(i.name));
  persist();
  renderList(searchInput.value);
});
deselectAllBtn.addEventListener('click', () => {
  checkedSet.clear();
  persist();
  renderList(searchInput.value);
});

// Copy selected to clipboard (names only, newline separated)
copyBtn.addEventListener('click', async () => {
  if (checkedSet.size === 0) return alert('No pandals selected.');
  const text = Array.from(checkedSet).join('\n');
  try {
    await navigator.clipboard.writeText(text);
    alert('Copied selected pandal names to clipboard.');
  } catch (err) {
    // fallback
    prompt('Copy the list below:', text);
  }
});

// Download CSV
downloadBtn.addEventListener('click', () => {
  if (checkedSet.size === 0) return alert('No pandals selected.');
  const rows = Array.from(checkedSet).map(name => {
    const obj = masterList.find(m => m.name === name) || {};
    return `"${name.replace(/"/g,'""')}","${(obj.maps||'').replace(/"/g,'""')}","${obj.premium ? 'premium' : 'normal'}"`;
  });
  const csv = 'Name,Maps,Tag\n' + rows.join('\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'pandal_checklist.csv';
  a.click();
  URL.revokeObjectURL(url);
});

// Build Google Maps URL using textual search queries (selection order as stored by masterList order)
openMapsBtn.addEventListener('click', () => {
  if (!checkedSet.size) return alert('Select at least 2 pandals to open in Maps.');
  // Build ordered array in the order they appear in the master list
  const ordered = masterList.filter(item => checkedSet.has(item.name));
  if (ordered.length < 1) return alert('Select at least one pandal.');

  if (ordered.length === 1) {
    // open single search
    const q = encodeURIComponent(ordered[0].name + ' Durga Puja');
    window.open(`https://www.google.com/maps/search/?api=1&query=${q}`, '_blank');
    return;
  }

  // Build dir link: origin = first, destination = last, waypoints = middle ones
  const base = 'https://www.google.com/maps/dir/?api=1';
  const origin = encodeURIComponent(ordered[0].name + ' Durga Puja');
  const destination = encodeURIComponent(ordered[ordered.length - 1].name + ' Durga Puja');
  const waypoints = ordered.slice(1, -1).map(o => encodeURIComponent(o.name + ' Durga Puja')).join('|');

  let url = `${base}&origin=${origin}&destination=${destination}`;
  if (waypoints) url += `&waypoints=${waypoints}`;
  // open in new tab
  window.open(url, '_blank');
});

// init
renderList();

// ---------- Fire Glow Particles ----------
const container = document.getElementById('fire-glow-container');
const numParticles = 25;

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement('div');
  particle.classList.add('fire-glow');
  // Random initial positions
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.top = Math.random() * 100 + 'vh';
  // Random animation duration
  particle.style.animationDuration = 4 + Math.random() * 4 + 's';
  // Random size
  let size = 4 + Math.random() * 6;
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  container.appendChild(particle);
}