function modalWhatsapp() {
  function addStyles(styles) {
    var css = document.createElement("style");
    css.type = "text/css";
    if (css.styleSheet) {
      css.styleSheet.cssText = styles;
    } else {
      css.appendChild(document.createTextNode(styles));
      document.head.insertAdjacentElement("afterbegin", css);
    }
  }
  var styles = `      
        .c-dialog {
            width:100vw;
            height:100vh;
            position:fixed;
            top:0;
            padding:0 5px;
            display:none;
            z-index:9999999;
            background-color:rgba(0,0,0,.7);
            justify-content:center;
            align-items:center
        }
        @media (min-width:768px){
            .c-dialog {
                padding:0 15px
            }
        }
        .c-dialog__content{
            width:312px;
            height:455px;
            background-color:#deb887;
            position:relative
        }
        @media (min-width:769px){
            .c-dialog__content{
                width:1158px;
                height:560px
            }
        }
        .c-dialog__cta{
            bottom:0;
            width:100%;
            height:calc(100% - 100px)
        }
        .c-dialog__close,.c-dialog__cta {
            position:absolute;
            cursor:pointer
        }
        .c-dialog__close {
            top:0;
            right:0;
            padding:15px
        }
        .u-isVisible {
            display:flex
        }
  
        .u-modalDireito {
            background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Direito/kroton_anhanguera_aon_generica_grupo-direito_312x455.jpg) 50%
        }
        
        .u-modalOdonto {
            background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Odonto/kroton_anhanguera_aon_generica_grupo-odonto_312x455.jpg) 50%
        }
        
        .u-modalPsico {
            background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Psicologia/kroton_anhanguera_aon_generica_grupo-psicologia_312x455.jpg) 50%
        }
        
        .u-modalArquitetura {
            background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Arquitetura/kroton_anhanguera_aon_generica_grupo-arq-urbanismo_312x455.jpg) 50%
        }
        
        .u-modalEnfermagem {
            background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Enfermagem/kroton_anhanguera_aon_generica_grupo-enfermagem_312x455.jpg) 50%
        }
        
        .u-modalEngCivil {
            background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Engenharia%20civil/kroton_anhanguera_aon_generica_grupo-eng-civil_312x455.jpg) 50%
        }
        
        .u-modalEngProd {
            background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Engenharia%20producao/kroton_anhanguera_aon_generica_grupo-eng-producao_312x455.jpg) 50%
        }
        
        .u-modalFarmacia {
            background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Farmacia/kroton_anhanguera_aon_generica_grupo-farmacia_312x455.jpg) 50%
        }
        
        .u-modalEngMecanica {
            background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Engenharia%20mecanica/kroton_anhanguera_aon_generica_grupo-eng-macanica_312x455.jpg) 50%
        }
        
        .u-modalFisio {
            background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Fisioterapia/kroton_anhanguera_aon_generica_grupo-fisioterapia_312x455.jpg) 50%
        }
        
        .u-modalVet {
            background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Med.%20Veterinaria/kroton_anhanguera_aon_generica_grupo-med-vet_312x455.jpg) 50%
        }
        
        .u-modalNutri {
            background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Nutricao/kroton_anhanguera_aon_generica_grupo-nutricao_312x455.jpg) 50%
        }
        
        .u-modalPedagogia {
            background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Pedagogia/kroton_anhanguera_aon_generica_grupo-pedagogia_312x455.jpg) 50%
        }

        .u-modalAdm {
            background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%5B0045MD%5D%20AEDU%20%7C%20FUNIL%20%7C%20Grupo%20WPP%20ADM/M_kroton_anhanguera_aon_generica_grupo-adm_312x455.png) 50%
        }

        .u-modalAgronomia {
          background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Agronomia/Curso_Vip_Agronomia_312x455.png) 50%
        }

        .u-modalBiomedicina {
          background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Biomedicina/Curso_Vip_Biomedicina_312x455.png) 50%
        }

        .u-modalCienciasContabeis {
          background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Ciencias%20Contabeis/Curso_Vip_Ciencias_Contabeis_312x455.png) 50%
        }

        .u-modalDesignGrafico {
          background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Design%20Grafico/Curso_Vip_Design_Grafico_312x455.png) 50%
        }

        .u-modalEducacaoFisicaBacharelado {
          background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Educacao%20Fisica%20Bac/Curso_Vip_Educacao_Fisica_BAC_312x455.png) 50%
        }

        .u-modalEducacaoFisicaLicenciatura {
          background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Educacao%20Fisica%20Lic/Curso_Vip_Educacao_Fisica_LIC_312x455.png) 50%
        }

        .u-modalGestaoRecursosHumanos {
          background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Gestao%20de%20Recursos%20Humanos/Curso_Vip_Recursos_Humanos_312x455.png) 50%
        }

        .u-modalMarketingDigital {
          background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Marketing%20Digital/Curso_Vip_Marketing_Digital_312x455.png) 50%
        }

        .u-modalServicoSocial {
          background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Servico%20Social/Curso_Servico_Social_312x455.png) 50%
        }

        @media (min-width:768px){
            .u-modalDireito {
                background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Direito/kroton_anhanguera_aon_generica_grupo-direito_1158x560.jpg) 50%
            }

            .u-modalOdonto {
                background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Odonto/kroton_anhanguera_aon_generica_grupo-odonto_1158x560.jpg) 50%
            }

            .u-modalPsico {
                background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Psicologia/kroton_anhanguera_aon_generica_grupo-psicologia_1158x560.jpg) 50%
            }

            .u-modalArquitetura {
                background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Arquitetura/kroton_anhanguera_aon_generica_grupo-arq-urbanismo_1158x560.jpg) 50%
            }

            .u-modalEnfermagem {
                background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Enfermagem/kroton_anhanguera_aon_generica_grupo-enfermagem_1158x560.jpg) 50%
            }

            .u-modalEngCivil {
                background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Engenharia%20civil/kroton_anhanguera_aon_generica_grupo-eng-civil_1158x560.jpg) 50%
            }

            .u-modalEngProd {
                background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Engenharia%20producao/kroton_anhanguera_aon_generica_grupo-eng-producao_1158x560.jpg) 50%
            }

            .u-modalFarmacia {
                background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Farmacia/kroton_anhanguera_aon_generica_grupo-farmacia_1158x560.jpg) 50%
            }

            .u-modalEngMecanica {
                background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Engenharia%20mecanica/kroton_anhanguera_aon_generica_grupo-eng-macanica_1158x560.jpg) 50%
            }

            .u-modalFisio{
                background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Fisioterapia/kroton_anhanguera_aon_generica_grupo-fisioterapia_1158x560.jpg) 50%
            }

            .u-modalVet {
                background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Med.%20Veterinaria/kroton_anhanguera_aon_generica_grupo-med-vet_1158x56.jpg) 50%
            }

            .u-modalNutri {
                background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Nutricao/kroton_anhanguera_aon_generica_grupo-nutricao_1158x560.jpg) 50%
            }

            .u-modalPedagogia {
                background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Pedagogia/kroton_anhanguera_aon_generica_grupo-pedagogia_1158x560.jpg) 50%
            }

            .u-modalAdm {
                background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%5B0045MD%5D%20AEDU%20%7C%20FUNIL%20%7C%20Grupo%20WPP%20ADM/D_Convite%20whatsapp%20adm1.png) 50%
            }

            .u-modalAgronomia {
              background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Agronomia/Grupo_Vip_de_Agronomia_1158x560.png) 50%
            }

            .u-modalBiomedicina {
              background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Biomedicina/Grupo_Vip_de_Biomedicina_1158x560.png) 50%
            }

            .u-modalCienciasContabeis {
              background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Ciencias%20Contabeis/Grupo_Vip_de_Ciencias_Contabeis_1158x560.png) 50%
            }

            .u-modalDesignGrafico {
              background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Design%20Grafico/Grupo_Vip_de_Design_Grafico_1158x560.png) 50%
            }

            .u-modalEducacaoFisicaBacharelado {
              background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Educacao%20Fisica%20Bac/Grupo_Vip_de_EducacaoFisica_BAC_1158x560.png) 50%
            }

            .u-modalEducacaoFisicaLicenciatura {
              background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Educacao%20Fisica%20Lic/Grupo_Vip_de_Educacao_Fisica_LIC_1158x560.png) 50%
            }

            .u-modalGestaoRecursosHumanos {
              background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Gestao%20de%20Recursos%20Humanos/Grupo_Vip_de_Gestao_d_%20Recursos_Humanos_1158x560.png) 50%
            }

            .u-modalMarketingDigital {
              background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Marketing%20Digital/Grupo_Vip_de_Marketing_Digital_1158x560.png) 50%
            }

            .u-modalServicoSocial {
              background:url(https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%20WT%20%7C%20ANH%20%7C%20PERSONALIZA%C3%87%C3%83O%20%7C%20FUNIL%20%7C%20GRUPOS%20WHATSAPP%20VIP%20/Grupo%20de%20WhatsApp%20-%20Ciclo%2023.1/Servico%20Social/Grupo_Vip_de_Servico_Social_1158x560.pngg) 50%
            }
        }
    `;
  addStyles(styles);

  const modal = `
    <div data-js="dialog" class="c-dialog">
        <div class="c-dialog__content">
            <a data-modal-cta="" target="_blank" href="" class="c-dialog__cta"></a>
            <div data-js="close" class="c-dialog__close"> 
                <svg id="modal-whats-fechar" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                    <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
                </svg>
            </div>
        </div>
    </div>
    `;

  document.body.insertAdjacentHTML("afterbegin", modal);

  function showModalCTW() {
    const dialog = document.querySelector('[data-js="dialog"]');
    dialog?.classList.add("u-isVisible");
    document.body.style.overflow = "hidden";
  }

  function closeModalCTW() {
    const dialog = document.querySelector('[data-js="dialog"]');
    const close = document.querySelector('[data-js="close"]');

    close?.addEventListener("click", () => {
      dialog?.classList.remove("u-isVisible");
      document.body.style.overflow = "initial";
    });
  }

  myInterval = window.setInterval(() => {
    const linkWhatsArquitetura =
      "https://cayx.short.gy/aedu-arquitetura_e_urbanismo";
    const linkWhatsDireito = "https://cayx.short.gy/aedu-direito";
    const linkWhatsEnfermagem = "https://cayx.short.gy/aedu-enfermagem";
    const linkWhatsEngCivil = "https://cayx.short.gy/aedu-engenharia_civil";
    const linkWhatsEngProd =
      "https://cayx.short.gy/aedu-engenharia_de_producao";
    const linkWhatsEngMecanica =
      "https://cayx.short.gy/aedu-engenharia_mecanica";
    const linkWhatsFarmacia = "https://cayx.short.gy/aedu-farmacia";
    const linkWhatsFisio = "https://cayx.short.gy/aedu-fisioterapia";
    const linkWhatsVet = "https://cayx.short.gy/aedu-medicina_veterinaria";
    const linkWhatsNutri = "https://cayx.short.gy/aedu-nutricao";
    const linkWhatsOdonto = "https://cayx.short.gy/aedu-odontologia";
    const linkWhatsPedagogia = "https://cayx.short.gy/aedu-pedagogia";
    const linkWhatsPsico = "https://cayx.short.gy/aedu-psicologia";
    const linkWhatsAgronomia = "https://aedu.me/POnQ80VjpeRp";
    const linkWhatsBiomedicina = "https://aedu.me/q1XCEvrea0ZB";
    const linkWhatsCienciasContabeis = "https://aedu.me/Lp1xEdPUIbzt";
    const linkWhatsDesignGrafico = "https://aedu.me/02cZtO3Eqx1G";
    const linkWhatsEducacaoFisicaBacharelado = "https://aedu.me/r8n6PkMU4dvm";
    const linkWhatsEducacaoFisicaLicenciatura = "https://aedu.me/KHTlrnWgtSjA";
    const linkWhatsGestaoRecursosHumanos = "https://aedu.me/POnQ80VjpeRp";
    const linkWhatsMarketingDigital = "https://aedu.me/DpNG1EgQv4fE";
    const linkWhatsServicoSocial = "https://aedu.me/biWlLpWMod8p";

    let userpaids = JSON.parse(localStorage.getItem("userpaids"));

    if (userpaids?.data[0]?.name === "direito-bacharelado") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalDireito");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsDireito}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "odontologia-bacharelado") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalOdonto");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsOdonto}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "psicologia-bacharelado") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalPsico");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsPsico}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "arquitetura-e-urbanismo-bacharelado") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalArquitetura");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsArquitetura}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "enfermagem-bacharelado") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalEnfermagem");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsEnfermagem}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "engenharia-civil-bacharelado") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalEngCivil");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsEngCivil}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "engenharia-de-producao-bacharelado") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalEngProd");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsEngProd}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "farmacia-bacharelado") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalFarmacia");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsFarmacia}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "engenharia-mecanica-bacharelado") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalEngMecanica");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsEngMecanica}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "fisioterapia-bacharelado") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalFisio");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsFisio}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "medicina-veterinaria-bacharelado") {
      showModalCTW();
      document.querySelector(".c-dialog__content").classList.add("u-modalVet");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsVet}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "nutricao-bacharelado") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalNutri");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsNutri}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "pedagogia-licenciatura") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalPedagogia");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsPedagogia}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "agronomia-bachareladado") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalAgronomia");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsAgronomia}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "biomedicina-bacharelado") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalBiomedicina");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsBiomedicina}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "ciencias-contabeis-bacharelado") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalCienciasContabeis");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsCienciasContabeis}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "design-grafico-tecnologo") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalDesignGrafico");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsDesignGrafico}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "educacao-fisica-bacharelado") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalEducacaoFisicaBacharelado");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsEducacaoFisicaBacharelado}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "educacao-fisica-licenciatura") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalEducacaoFisicaLicenciatura");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsEducacaoFisicaLicenciatura}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "gestao-de-recursos-humanos-tecnologo") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalGestaoRecursosHumanos");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsGestaoRecursosHumanos}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "marketing-digital-tecnologo") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalMarketingDigital");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsMarketingDigital}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    if (userpaids?.data[0]?.name === "servico-social-bacharelado") {
      showModalCTW();
      document
        .querySelector(".c-dialog__content")
        .classList.add("u-modalServicoSocial");
      document
        .querySelector("[data-modal-cta]")
        .setAttribute("href", `${linkWhatsServicoSocial}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    function pushBot() {
      fireGA(
        "anhanguera:graduacao",
        "clique:modal-grupo-whatsapp--whatsapp",
        "administracao-bacharelado"
      );
      window.open(
        "https://join2.easynvite.com/59e0be28-63a4-449b-9bc2-8c1e7c149359",
        "_blank"
      );
    }
    if (userpaids.data[0].name === "administracao-bacharelado") {
      showModalCTW();

      document.querySelector("[data-modal-cta]").removeAttribute("href");

      document.querySelector("[data-modal-cta]").removeAttribute("target");

      document.querySelector(".c-dialog__content").classList.add("u-modalAdm");
      document
        .querySelector("[data-modal-cta]")
        .addEventListener("click", pushBot);
      // document
      //   .querySelector("[data-modal-cta]")
      //   .setAttribute("href", `${linkWhatsPsico}`);
      closeModalCTW();
      clearInterval(myInterval);
    }

    console.log("localstorage :::", userpaids?.data[0]?.name);
  }, 1000);
}

modalWhatsapp();
