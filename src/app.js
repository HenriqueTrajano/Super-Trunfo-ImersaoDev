const cards = [
  {
    name: "Squirtle",
    image: "../img/background-yugioh.png",
    attributes: {
      attack: 5,
      defense: 7,
      magic: 5
    }
  },
  {
    name: "Cayde 6",
    image: "https://lh3.googleusercontent.com/aQ7IVVBRA6a4V0BMskl7ts2nCf1bK0yZuPJGYza2f6K3O-kRenfsHiVnH674BC0e5MrKLP22Kf8UnVWuMIr6P9Z0ldmMVkBhAT9NmggcuupIagTuyEJATe70hINrZ4NpWE8Cpj51r0719EgPfgkPRgAC0NVgxKNsv1PJMVkzw53lpRCTi9lZtB-xuFUvMwj94JSKMNIm3x3ZCtPqFs4n4yVbV_b1ANMOpTmcbL4hb2Q1JZUbg3L_tlZQmQo1ABf7aiJawccRVK1AyKWfe7yS_5xXsGx0JQ3zQ-81X67m0PE41-cSkm1bm51p2GcxPqL5ZUPZhg3dftQat7BVuR3i0c-RZmQqp3mI4yoDAk-IZkGUa99lGx3hKRPw5IDm4Op2djSlAei3l16Ij4l0wOk--EuEQjAkc1pW106PGv3bT7gA0vEvWm22igY6tt1HAp3TES7k6i8o5wq_uH14UP6xvicWKLI6GzVo4-vdLAobNOnSgunCkecbH-N9HDAtHhpBxA7fYEkQE4dcc87SnEjGyJ33XAO2ih-F2HbpigWsm4Z_-aVKbAYctZYGXZ96Gf8g74795omrF83oYpk_NA0kU56v12d65l_7T0B7fsMsrYYfjWBGvnxzL9cE0ytMuqQDeTxeb1bkYZBBi7mpvj51wqz6RSGCv9Z56mD5XAgft4yZYqa61NmQ2FDoIDXpRk8JKIuNsKlu6jLIg65hUL6P3geD4bF62zn7QmgyQONkWzB8rPCRbUxV7ofa-Bz9IntbiVTpGC4ZozQMokdtot5B8U-eEyWBIv0=w1565-h880-no?authuser=0",
    attributes: {
      attack: 8,
      defense: 3,
      magic: 4
    }
  },
  {
    name: "Raiden Shogun",
    image: "https://lh3.googleusercontent.com/j1YLaReBLAcpRw2hXZk-cYv9Wst4dqg6MJGHw1W1IOJMNU4UdYJWMC5mpUXANJnFn3pyitE1i9kaNCCft9pjnR5FxXEgvDZ2Y6oPdNH3Oexo6MpY74EDAGeRTyxZ5p4XD9xsEOdmfNz6hRojv8erkAwczN7jtFwIXLp5JoRmn3HUGg8pW_DfOqVbNkCsfFoAtRzBYRoplarStJZjbiy1P3yNrwfZO_tSwjAajz1a0UslQ7-0uleS6X7xQESKfrjqQcAFOIRs_jdThddyb5VHojUTAdg9xEg-OJMaL3ue-APdCcLy8zsXcSjgQVL1Xj97SnzKHHHOAn4jtuixhitOTCol1xomTxeYTzmCDvyqIDjtpxupe8VIzinsGJMHPQEEwn-JzeKxErmSu4FwmcceT1w51uygP2eO4ZPLpAy2ErVm5frJXJh-N1cS_BGLacblZfA1FJMSCMhrmCBS3Ig9irPrqObLrWOra39CjM_AVfVKPwbvSPdkyVAiWV1TOCwTOloYKLrObCYKZ_z0FImPeFdkNHn3pNvbFmkIRDSX-4XORyZWojk1e8FE65mFM40lUhFr_NF0KDWj1AI6ZKDxTpH88huxYtoAQ43pQifE4bD0dE-QKtdGzqKFRywwKI5uZEn0fIf7--N6iEn-WuSkqzweQexNyjxSdj5SQnudH6pqTWndrXSyUWOCohFbUD6Rt3JoBZbAN5xP4LqxYzPopyjfLf5PQvRAdftxpKDcELoFMxjWO1Qjm3IP8N56DkBnb2EEiCaCrY5sT5JEx6ObT8nmiG_9eu8=w1125-h937-no?authuser=0",
    attributes: {
      attack: 10,
      defense: 4,
      magic: 7
    }
  },
  {
    name: "Black Mage",
    image: "https://lh3.googleusercontent.com/i-UOUeiQ01K6DLSjWX8zKf1BNomuqUM7-0Oel77bhaRggidH_da8Pz4_D6mtkeq8JGaURZSvrbKbmN7diMXEytyoHJPbuQf7c86hvcknEfPvXPqHXccciaNzZX2M-c8WWHqYbmf9JZjatOiZp8D4yoXMF4AEQSy3OBCCNgCQP9CW36yinvpQ2LtrXPVObMhaslLo0-wVGANDRT5ootLc5dCz2flV3cfbo6NlZSgw_x9AtsDShrOBKBaoAJVa5hqO-G9-1dsXRdIMt6x26VjaRGhxvOA05wY4-FDqO3wDVFDeTTr02xCYIL8QfI3pcB-wOw5ODLYXoQBrn2IHnr-XFMZieXWmQiw_n7hMhrf4KFVdXXEZYB0eoY4Baz04RjkymlKd-wEvCVLG-lLh6IUtNbTGm0ituVhp9HXhF-euRZXzFnvG-60HTJxfw60fncjy-Qdm8Z4W_QBLIIco3usdgOWl4PFltYry8Oj_J_jxVYBmOYjWSWwexoZSqAr5bwwknAOENOwpn7cTa0ymNI73PrjvFL9pYQGb4gFWR-i1rQ-z2RChwB6QS_7I7GlRHt54arve_ZnXcBs_GZSYHafxrmifqPA5aaoEwxvm_QxwOjFqJVEr9h1jPUCbs-UHWSgHI09T_LZmuyFzHQE0arREq_fwaGB4q3IQOFKT5h3rIl_lZBNsgpttTMGxNr_lst-praahiXbPJ8-4kJJ-4UzBkFMp9jxgLnw_f19djgocTFCkVaNLkBP4tWh00SnxOmmrFPfDQAr0roTcmFdRbtU9ImIOcxMPz_c=w728-h515-no?authuser=0",
    attributes: {
      attack: 1,
      defense: 4,
      magic: 10
    }
  },
  {
    name: "Seto Kaiba",
    image: "https://lh3.googleusercontent.com/Rcc9j5ya-F4ZhbQUst_DPuUfPTSKEbX1e1ed1SD9MzJ4amupT1dFWJq03PTxnqtbsV_MDNgZg9Q6XPqKqMTA3-cd5AkGoVKqe9_IlsjIzRAkGehwybV_GV5JgQEYwZAsxP6VmSGjyPkCyeYuqXJTywZ6Eo8sq1f_h395RL5fJc8tIlo_xXQdtpFICaDfc3vu7yH4nb7acjy7TA5a-iPi3M4g9na3rEDuYmomtemTwx9woOiVyCAwZ4X4TRA55FjYLEJksMgpSl_vqWHcMtjo45idZkbDI5bSsLgOezUhChLc18oqO63xAqRdX9qZjX7b0HSuzS03izXdm92dd1cg4mjcidHJlNBliWWhNMkgZ77ARh65r03ecSes6zxrP9Woo9T07a1kwgolxQNnHDZLO6IKkbDd7-02JkEGDV8EoEua0bM-DPXVRDjfPlfKuOwbz9gQNdXIMXhzUHaYtfnryNnoC7eFF3Of9ME3234x6xc6vi8oUJWm1LAhNqKmbqHoqk1T42Tg66GcFEZwmF6cFxKVhA7cHYle4z_K4p17s6tk-RVK_TfvMUpANzXbPPqEWdJYuAZ2dH-EtQubxVTDbsY2IrjuJRnWCX001gtJI7Su-4TFwTbTTH1nMSOEVssYEHA2vb4RjvZl2HRjUFTT_I5Po95v1Tr4fYaDnC35sd36ME83EPogQ7_21nOJ08WqDaWsv0nuJg3jTUwf6YzVcHCXp3srmAmyR8oUpk-rUQWxeLDf5cKDRs4VlQ6qQ6vfYlrUBHQBhuOsvU5xeCRDDVArJB3M5GY=w1174-h880-no?authuser=0",
    attributes: {
      attack: 6,
      defense: 3,
      magic: 9
    }
  },
  {
    name: "Kuriboh",
    image: "https://lh3.googleusercontent.com/iq4bqBHjHVa_z0grmbpBTGu3YZih5sUs8AlV-ZGs8NQZdiu52FpAGuXlmmzIvCeH3X41kWd6Ra-5durs5Xo-8VIokD7bwg513VWp0Wob4XRL-E9cow0JLkDbSY8K9MyxbE1ekqHUzCujlBz7oUgAw9k0qVBUExH2NCs8mHrwTgOcLOHyl0MBgc574lcfpZ9KcjtzHe7GtIMbR82-lWVwGGblV4tkPGSNBifsMcPQeDau3H7GOVrRF0YBN-SCs0FGuUkuYEUZryNe6ettEVJ-Q_gnpkcWE3wgWotwiHgJ5kLD29433rWCQkkZ2C_MQAswx4_0KZ8iaxiaNK7t7Cmz7slPI9lVKNSnMievklyvPTdx_nbF03mLp2EijEt8DtBTEO0uVffVDhdrjFE_swecEOWbHgob3dUS8SR7tb7r-zirmncW7uni4kk0bSyDeua-3KbshpkrlidKPmCzB6MNB3kPW5Uji8KE-wTcXUMv6BlReL_cH93IMEx5J7-9VYWrGrjJp4d5B2gWLhQGx3OfeXHOyD9Xv2ZFriMyYnO3NzkGu5OFQRYAF91KjntXqUHtIy3pBcozM3qULznOSrJE5IqzMAd2XxOl491OKoby_a7IM5PXDz4NF_IYouPYXZ7J0xwnnkAKq4ZdX9cTqwY3wP_9a8mCzQNa0hhoFSFzs7lCl1hzFSKtSlvVV-4Qxt_V6_kGe_ABrS27D5n-g33kX-TEKWA8PkgKKeVQtodI0_IdcXiEnkkNcVawqwdschvvdUbtJMLPq4FMD5jpON6pERql1QziJ60=s544-no?authuser=0",
    attributes: {
      attack: 1,
      defense: 1,
      magic: 1
    }
  },
  {
    name: "Exodia",
    image: "https://lh3.googleusercontent.com/8j3MID7yr978wDPZS-E6U8RK0CR8K2kM9PJI0rwOAwXPVAE0xpfxuRH7tBLaxxe5i3lQ1iYAv1mmcdAPSPClGKIbtupWGGxUy8XlybqTE0V3-zX5_TMoNNTbzEU_dKsIBizlslwlFBn3ngnt7U2QVrtBBoihY468IkB_pKbl-mx6xsgoHu-9g0tCYrWp1cKunTEMBhcQcl32wCQxQJTXQmOnHQs94_mr1o58iAq-tQfzOwobT1T7kzUW5rWLlrSWQLDX6leN3-VGcIEOuymJ-kCRhSDL_M7NyKB93hkj4cFHV5sEIcvWcC9W3S5Gu4I54K4eA7cz-LeIlawSES6oMokDHXYdgmdQJ8y2IoDQ5tbhoM4iEdSpAegVaBvRqqSc6JSXqY9cxDn8uLC8ySONSz-iggBPhEVfeVBcPikXBOnvi00gz1iJbmnBVOAgJ48676o6KHnuqZTw2wIbVCUMExM8cwT3CgqHJOGMQItKHG2IMl3X42WBTiriUJ8qtAUASWxQIEgTRM9_4mTB731KJ1PvxZHFaq1FxbDmWSy0uXWUWpQD7GaYvFtzep8xPfCIVe80C63X4iuXy2CbhYnVSbD2j12ly7seSTs9wA2EEGQ_hg2DpPA2zA33LhBpNWHvrflsZCC-031hauxKPv6ZNZgfT6-8QFH-CMezOFNAM9UI2Tt6pkXX7NnJ5am6IU3-va6qSR3q5RMPipQqhKbVnc_zaY5O7mQNLUcTnqfr7d88pyLLriVlLkOpVUT2p7QfPeCIlKhOSVRhfbeKVohcxp14u6oLXew=s655-no?authuser=0",
    attributes: {
      attack: 11,
      defense: 11,
      magic: 11
    }
  },
  {
    name: "Mandalorian",
    image: "https://lh3.googleusercontent.com/NEWv40wM_yqhpWvtokek9h74VaMammZ-UckHue5bjheDlvIXmIzNF50yPokutptCEyVIOZo-OJfyinv46Ao58XYJEwFTxl_2JJZDQD8kSygj0I7RFON6VDU9gRLkNewa6wv6qfXnyqsPPDcvsT8Z9x4ezFY04S3pPly1WkPt2y-Mh7u-Mz22RzLLIC_v3LXJA1yhgnLu3nxbCdP9G5VAkHdvscMzEqGBch3q0Iiza31MSWecIfZe1DMBwwBQ1bb0pmvmLa-aP6B6imjgp0LaFgfepZTzYDv-S-Dw1a1t6iVpcBe5hQu9_ofcGOabdMxTKlZdUTzaqJ5Zk6g6Kfcx3RwVdPceylKuZKnDHQzoJlV8n5tQadUdqKlTUpImDHPeARfRR83WgXopwCZHCAEXMZo8iTlRYzANNqvgnkLq9Np0IsonDYblV-JahdnkvPoiXuMu2GlkfDE9yR6X8XRdO_tKY2VeAMTAcTACG3YyFzTNtRhF6nEQbItx89hywxoit0SmiV_fdI2W85kLPu1KWcOAjX59LFcXLamk6Ogs7aCSlRE622vO2vvB6ExcX48886Es4A_MaMv1g7dAtnzuWfMwjBotffsPhQsxuqn4D0jl76P3YjgDWTMUDYNzZPGknrcvAsEUoGNf95wbut2iGm398oReNbEUa5cYuGvFKm3f6dwmS7cAFqEZBa51oU7rkaUbJskdeuZtuoqJyJf2xo6Oil7rIfXjS0V2V51UyJ7R9s_DXQwNOnMgLjaDz4cFBhC_v17UZUBqIcHrIISz8mSdU3S1f3g=w960-h652-no?authuser=0",
    attributes: {
      attack: 5,
      defense: 9,
      magic: 3
    }
  },
  {
    name: "Zed",
    image: "https://lh3.googleusercontent.com/9VgroV8nLSPdJoSciHn8FXLjWytV41EkuJ0f08LNQx_0wOzmNeMcsIrjHGyLeN4jlJSjTT89-MoQsgiA9UjQIvkBnU6-3pCXlGPBQefmBeBnKk6dsdlI-Qv_cRA6KZFg7SayTlnWZPShkCFlniQc0_zZ7qzZ6DCA8H1b_9FSCjBbOXOl-DrLoSD_ZF9bqZj0tZdv0x4vwExsN2zIAdrAihSE3mwAGcTopIG_Wx-vcEz67TOSBL6r0LChr9G9Jh0wGaKSt5AntfbAlaZWZSSuUVWKRMrSEkHzp2zB3yrIbBxxwsv3L-kxYTDYcBe1DGdR2bQSZwlD0LneJeRLAVBTIqBwQeXC3MvBX-Sk4f36pRv-FBEMds5jcfXkPERicreQJi3cfDykP0nnyg3mkyc--RlHX3edbemEUG211ne4NE8vY1OOOh1ejlCxrfdghnMNMSkxyVxfTMe74wY0EPmz19Gqdf1_ECK9CgsS7ntooIvlKWtetygj9e6bytxAtZ3ibAMCNGfCeGTAYCp5q9kI0H2GQH_P2stOw2P_5QvDkXda-6VozfIkY4C2DVwmtYLkvreE3OkQb_5OOlJu4AzLAI-CtWHZeM2jSr6-mWmo3NBPzaDFLFfPAbgUHh59t2xlHOnPPCcq85wlg2_jDWN7ZV2r1rhpDBlY0sXMWTy3h5MFLgVGPg3G18ittXy2jJT5Rv63z7tZp0e0gOWqmXQuHF6K6DVXg8zv3ps0D8_jIyGLajKwhDlRnKghK-ZRnyjOlQ-P3Pk8Y2Ca5kgBeob6JmvgT8D-3OY=w960-h670-no?authuser=0",
    attributes: {
      attack: 10,
      defense: 4,
      magic: 2
    }
  },
  {
    name: "Thresh",
    image: "https://lh3.googleusercontent.com/h9bgaH1PbUwUke9_2UfuJqk2jseEBAHgm1IQN4ij2ybgp4Nusezckp7LWGjAHhT85VxXx5RDxlGIowigXmVwOS07kJG073hcNI8iLZTD4rUIImMHZeUXFfvmIB2vSoKUagT88adzqgDfymsUT2t1MvRgMuWmquApRX4P6VsU3Vt6aX5OVv9PbF3W8B4VKt6vx_UsJQkAHnJHymc9lzFzxdl3UUpAwOTSPKfqAmzJK94GQuKl9MCdjnz8T0zwkoLmyUXpRE5QSbFmS4-ypcgmw-4J9DqEV_DXEeyBQ-_JTE8GFobKcYxhnJh1klqJHgKmHbihd_4oHx5xmjcSp1H6CKiunthgtjInR9EQD-rslmV9Gq2H4Nwrc2dbLmH9wXS6cfit0YQGuhgyi85h0gwFzyjjOXGHV6T15yO6ZoqJ_pJT2jrnozdq97m0mdFunVtKhvddp4NnN6QrdOgd2rfZiS5claQwtesGFReKNrR1O5uS9osW-Brepsbi7de8J4ckVbJ4ETv46Z7tvcumb-vIRu8IFNJLD6-psX1OMJ1gy2xLlR6FvwpmiQv_gvMrcHyBBLPNJPwKYUAUinRAGUzuvNe2lbJUpDj2puuH9yuclItZL7nUcLm18Q_A47d94LSy6P7GINUhNOkUFNQeRTMyIsdC1IUzxFMY9tUO_FIz_0JDLDPJ-Pmjn9ZX6hU8BxYCqM5AWfFItGn47jVydxv4Mi_Y0g1bVKhTI-b6NYUOZ0BoUxXonJ2a0AjJGIAoiaSEJ_63hd2NfBQQ4EtgL7QoR-Z3ZkalotM=w960-h643-no?authuser=0",
    attributes: {
      attack: 5,
      defense: 7,
      magic: 7
    }
  }
];

let machineCard;
let playerCard;

function drawCards() {
  const numeroMachineCard = parseInt(Math.random() * 10);
  machineCard = cards[numeroMachineCard];

  let numberMachineCard = parseInt(Math.random() * 10);

  while (numberMachineCard == numeroMachineCard) {
    numberMachineCard = parseInt(Math.random() * 10);
  }

  playerCard = cards[numberMachineCard];

  document.getElementById("btn-draw-cards").disabled = true; //Desabilitar o botao
  document.getElementById("text-attribute").innerHTML = "Escolha o seu attribute";

  showPlayerCard();
  showMachineCard();

  document.getElementById("btn-area-play").innerHTML = '<button type="button" id="btn-play" onclick="play()" class="btn-hover-normal btn-start-reset">Jogar</button>';
}

function translateAttribute(attribute) {

  let textAttribute = '';

  switch (attribute) {
    case 'attack':
      textAttribute = "Ataque";
      break;
    case 'magic':
      textAttribute = 'Magia';
      break;
    default:
      textAttribute = 'Defesa';
  }

  return textAttribute;
}

function showPlayerCard() {
  const divPlayerCard = document.getElementById("player-card");
  divPlayerCard.style.backgroundImage = `url(${playerCard.image})`;
  const cardFrame = '<img src="https://lh3.googleusercontent.com/SJ_i3Gz0HateAcq81u_tLzV7bjL_obfAolO_epSakre6U6-sf34F11b4v-7-dlugbSiG1cRhidH-PLLiA2J8UadWjKQe7zWNfjAgcADordzZGK7ULw-LY0VmjL50eF81KMpD2gNbJWsf4fijDupY1v15A6Dqt-5VxkbK4iGin7irFHl7SpSQ3QSg0pc2eLJDFQAkF1zIcUD3Yyj1cBxQaeacYGwoXENMtqR-TPDQholLXKoeBgEYaaaYoc2ZmiZ-Mly37A-New3TuupEt3dZdn4pqYOyxRuBQHmy4xiBOxXh9QmS6NzLPi4znh3JBfC0p_OKAe6GKkn66ZAfUyhmbYyimwjts1TpL9ZsPWZcAJE9fySr6daAIfEUqJmix0ZZtRdzSOycUUBw1pmflthqcsi0J6fQg-cUl_B6WsthzyDkugHdK1r_y4H0YcySxvzaTLWRLkTwtgol3nLbk4IeESbhkKNlyd8sUKNCi6RVDdMj1J2tpijORYZnxXS5ObUUFdExChgsEyTz_cRVtPIW3WYzKGSLsbxGlSFmvaF0g1VXO85lW2UYkjigCgktseeqs62U9th3DRV-30iFCt6HKeX0gLrn1GauBcOO1Fvng0i5dp4H7ODMfTotdXJRQzCGm-b4MItylAAGwswiC9os4JQwWZ4iccc41PTyBQRgGsPu7nH9fyO42WYECKEX3rkhyMiBjRTLqSu8tCSrIdU2WGflDrmtNOARu9bvKWg4E4sexEb4mZAfB7l994oKW_LtW88SmD1TfvvB0QNCwNeiyd2eZKMorAU=w672-h936-no?authuser=0" style=" width: inherit; height: inherit; position: absolute;">';
  const optionsTagHTML = `<div id='options' class='card-status'>`; //apenas abriu

  let textOptions = "";
  let textAttribute = "";

  for (let attribute in playerCard.attributes) {
    textAttribute = translateAttribute(attribute);

    textOptions += `<label for="${"radio-" + attribute}"><input type="radio" name="attribute" value="${attribute}" id="${"radio-" + attribute}"> ${textAttribute} &nbsp;<b style="color: #17140f; font-size: 1.2rem;">${playerCard.attributes[attribute]}</b></label><br/>`;
  }

  const name = `<p class="card-subtitle">${playerCard.name}</p>`;

  divPlayerCard.innerHTML = cardFrame + name + optionsTagHTML + textOptions + '</div>';
}

function showMachineCard() {
  const divmachineCard = document.getElementById("machine-card");
  divmachineCard.style.backgroundImage = `url(${machineCard.image})`;
  const cardFrame = `<img src="https://lh3.googleusercontent.com/SJ_i3Gz0HateAcq81u_tLzV7bjL_obfAolO_epSakre6U6-sf34F11b4v-7-dlugbSiG1cRhidH-PLLiA2J8UadWjKQe7zWNfjAgcADordzZGK7ULw-LY0VmjL50eF81KMpD2gNbJWsf4fijDupY1v15A6Dqt-5VxkbK4iGin7irFHl7SpSQ3QSg0pc2eLJDFQAkF1zIcUD3Yyj1cBxQaeacYGwoXENMtqR-TPDQholLXKoeBgEYaaaYoc2ZmiZ-Mly37A-New3TuupEt3dZdn4pqYOyxRuBQHmy4xiBOxXh9QmS6NzLPi4znh3JBfC0p_OKAe6GKkn66ZAfUyhmbYyimwjts1TpL9ZsPWZcAJE9fySr6daAIfEUqJmix0ZZtRdzSOycUUBw1pmflthqcsi0J6fQg-cUl_B6WsthzyDkugHdK1r_y4H0YcySxvzaTLWRLkTwtgol3nLbk4IeESbhkKNlyd8sUKNCi6RVDdMj1J2tpijORYZnxXS5ObUUFdExChgsEyTz_cRVtPIW3WYzKGSLsbxGlSFmvaF0g1VXO85lW2UYkjigCgktseeqs62U9th3DRV-30iFCt6HKeX0gLrn1GauBcOO1Fvng0i5dp4H7ODMfTotdXJRQzCGm-b4MItylAAGwswiC9os4JQwWZ4iccc41PTyBQRgGsPu7nH9fyO42WYECKEX3rkhyMiBjRTLqSu8tCSrIdU2WGflDrmtNOARu9bvKWg4E4sexEb4mZAfB7l994oKW_LtW88SmD1TfvvB0QNCwNeiyd2eZKMorAU=w672-h936-no?authuser=0" style=" width: inherit; height: inherit; position: absolute;">`;
  const optionsTagHTML = `<div id='options' class='card-status'>`; //apenas abriu

  let textOptions = "";
  let textAttribute = "";

  for (let attribute in machineCard.attributes) {

    textAttribute = translateAttribute(attribute);
    textOptions += `<p value="${attribute}"> ${textAttribute} &nbsp;<b style="color: #17140f; font-size: 1.2rem;">${machineCard.attributes[attribute]}</b> </p>`;
  }

  const name = `<p class="card-subtitle">${machineCard.name}</p>`;

  divmachineCard.innerHTML = cardFrame + name + optionsTagHTML + textOptions + '</div>';
}

function getChosenAttribute() {
  const radioAtributos = document.getElementsByName("attribute");

  for (let i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked) { //Se tiver marcado so vai
      return radioAtributos[i].value;
    }
  }

  //Se nao tiver nada selecionado
  const radioAlternativo = radioAtributos[parseInt(Math.random() * 3)];
  radioAlternativo.checked = true;
  return radioAlternativo.value;
}

function play() {
  const attributeSelecionado = getChosenAttribute();
  const divResultado = document.getElementById("result");
  let conteudoResultado = "";

  const valorplayerCard = playerCard.attributes[attributeSelecionado];
  const valormachineCard = machineCard.attributes[attributeSelecionado];

  if (valorplayerCard > valormachineCard) {
    conteudoResultado = `<p class="final-result">Venceu!</p>`;
  } else if (valorplayerCard < valormachineCard) {
    conteudoResultado = `<p class="final-result">Perdeu...</p>`;
  } else {
    conteudoResultado = `<p class="final-result">Empatou...</p>`;
  }

  divResultado.innerHTML = conteudoResultado;
  document.getElementById("btn-play").disabled = true;

  document.getElementById("reset-game").innerHTML = '<button type="button" onclick="restartGame()"' +
    'class="btn-hover-normal btn-start-reset">Jogue outra partida!</button>';

  const divFocar = document.getElementById("focar");
  divFocar.scrollIntoView({ block: "end", behavior: "smooth" });
}

//Desfaz tudo o que fez
function restartGame() {
  document.getElementById("btn-draw-cards").disabled = false;
  document.getElementById("text-attribute").innerHTML = "";

  //Cartas do jogador e maquina
  const playerCard = document.getElementById("player-card");
  const machineCard = document.getElementById("machine-card");
  playerCard.style.removeProperty("background-image");
  machineCard.style.removeProperty("background-image");
  playerCard.innerHTML = "";
  machineCard.innerHTML = "";

  //Tira o botao de jogar
  document.getElementById("btn-area-play").innerHTML = "";

  //Tira a menssagem de result
  document.getElementById("result").innerHTML = "";

  //Tira o btn de reset
  document.getElementById("reset-game").innerHTML = "";

  document.getElementsByClassName("container")[0]
    .scrollIntoView({ block: "start", behavior: "smooth" });

}