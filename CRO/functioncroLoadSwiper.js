function croLoadSwiper() {
    // Verifique se o HTML do carrossel está presente no DOM
    if (document.querySelector(".swiper-trending-courses")) {
        const cssSwiper = document.createElement("link");
        cssSwiper.rel = "stylesheet";
        cssSwiper.href =
            "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css";
        document.head.appendChild(cssSwiper);

        const scriptSwiper = document.createElement("script");
        scriptSwiper.src =
            "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
        scriptSwiper.onload = function () {
            const scriptSwiperOptions = document.createElement("script");
            scriptSwiperOptions.textContent = `
					const swiper = new Swiper(".swiper-trending-courses", {
						slidesPerView: 4,
						spaceBetween: 8,
						breakpoints: {
							320: {
								slidesPerView: 1.2,
							},
							480: {
								slidesPerView: 1.2,
							},
							640: {
								slidesPerView: 4,
							}
  					},
						pagination: {
							el: ".swiper-pagination",
							clickable: true,
						},
						navigation: {
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
						}
					});
				`;
            document.body.appendChild(scriptSwiperOptions);
        };
        document.head.appendChild(scriptSwiper);
    }
}

function croCaroselTrendingCourses() {
    function croCaroselStyle(styles) {
        const css = document.createElement("style");
        css.type = "text/css";
        if (css.styleSheet) {
            css.styleSheet.cssText = styles;
        } else {
            css.appendChild(document.createTextNode(styles));
            document.head.appendChild(css);
        }
    }

    const styles = `
			@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
			.em-alta {
				padding-top: 33px;
				background: var(--contrast);
			}
			.cro-carosel .cro-carosel__title {
				color: var(--primary-hcontrast);
				font-size: 40px;
				font-style: normal;
				font-weight: 600;
				line-height: 42px;
				text-transform: uppercase;
				margin-bottom: 32px;
        margin-top: 0;
			}
			.cro-carosel {
				position: relative;
			}
			.cro-carosel .swiper {
				padding-bottom: 50px;
				height: 100%;
				width: 93%;
			}
			.swiper-slide .cro-content {
				background: var(--contrast);
				box-shadow: 0 16px 20px -11px rgba(0,0,0,.18);
				border: 1px solid var(--border);
				border-radius: 24px;
				display: flex;
				flex-direction: column;
				font-family: 'Montserrat', sans-serif !important;
				padding: 24px 16px;
			}
			.swiper-slide .cro-content p {
				font-family: 'Montserrat', sans-serif !important;
			}
			.swiper-slide .cro-content__title {
				color: var(--text-contrast);
				font-size: 20px;
				font-weight: 700;
        min-height: 30px;
			}
			.swiper-slide .cro-content__type-and-time {
				color: var(--text);
				font-size: 16px;
				margin-bottom: 16px;
				margin-top: 0;
			}
			.swiper-slide .cro-content__modality {
				height: 78px;
			}
			.swiper-slide .cro-content__modality-ul{
				display: flex;
				flex-direction: row;
        flex-wrap: wrap;
				margin-bottom: 16px;
				gap: 4px;
			}
			.swiper-slide .cro-content__modality .cro-content__modality-item {
				cursor: pointer;
			}
			.swiper-slide .cro-content__modality li {
				font-size: 16px;
        font-weight: 600;
				border-radius: 24px;
				border: 1px solid var(--text);
				padding: 4px 12px;
			}
			.swiper-slide .cro-content__modality li.highlighted {
				border: 1px solid var(--primary-hcontrast-50);
				color: var(--primary-hcontrast);
			}
			.swiper-slide .cro-content__price-title {
				font-size: 16px;
				color: var(--text);
				margin: 0;
			}
			.swiper-slide .cro-content__price  {
				color: var(--text-contrast);
				font-size: 24px;
				font-weight: 700;
				margin: 0;
			}
			.swiper-slide .cro-content__shift {
				color: var(--text);
				margin-bottom: 26px;
				font-size: 12px;
			}
			.swiper-slide .cro-content__btn-saiba-mais {
				font-size: 14px;
				margin-top: 10px;
				height: 40px;
			}
			.swiper-slide .cro-content__shift .shift__detail {
				font-size: 16px;
			}
			.cro-carosel .swiper-pagination .swiper-pagination-bullet{
				height: 16px;
				width: 16px;
			}
			.cro-carosel .swiper-pagination .swiper-pagination-bullet-active {
				background: var(--primary-hcontrast);
			}
			.cro-carosel .swiper-button-prev,
			.cro-carosel .swiper-button-next {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				z-index: 1;
				padding: 10px;
				width: 44px;
				height: 44px;
				border-radius: 50%;
				background: var(--contrast);
				box-shadow: 0px 4px 16px 0px rgba(29, 29, 29, 0.12);
			}
			.cro-carosel .swiper-button-prev::after,
			.cro-carosel .swiper-button-next::after {
				content: "";
			}
			.cro-carosel .swiper-button-prev {
				left: 10px;
			}
			.cro-carosel .swiper-button-next {
				right: 10px;
			}
			.cro-carosel .swiper-button-prev path,
			.cro-carosel .swiper-button-next path {
				fill: var(--text);
			}
			@media(max-width: 768px) {
				.cro-carosel .swiper-button-prev,
				.cro-carosel .swiper-button-next {
					display: none;
				}
				.cro-carosel .swiper {
					width: 100%;
				}
			}
		`;

    croCaroselStyle(styles);

    // Esconder elementos
    function hideElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.style.display = "none";
        }
    }

    hideElement(".ribbon");
    hideElement(".procurados");

    const findEmAltaSeciton = document.querySelector(".em-alta");
    const findEmAltaSectionWave = findEmAltaSeciton.nextElementSibling;

    if (
        findEmAltaSectionWave &&
        findEmAltaSectionWave.classList.contains("wave-divider")
    ) {
        findEmAltaSectionWave.style.display = "none";
    }

    // Buscar dados dos cursos
    function fetchCourseData() {
        const idsToFilter = [
            "edde83fce2ac9f5777eb8bbce6855ae2", //Administração
            "67a63d55d2d6cf68d8e9a9a983431203", //Pedagogia
            "44734500cbad09850ce30d4d3f62f56b", //Enfermagem
            "e14d4eaa6ee2940c30cebc644af73562", //Direito
            "f519baecc2935e1b65309702c56c1fb8", //Psicologia
            "fd18fd5d33dc90775fe0bfccb5e44720", //Gestão de Recursos Humanos
        ];

        fetch(
            "https://captacao-frontend.kroton.com.br/portalinstitucional/portalinstitucional-backend/v2/products?brand=anhanguera&category=curso"
        )
            .then((response) => response.json())
            .then((data) => {
                const filteredById = data.data.products.filter((course) =>
                    idsToFilter.includes(course.unique_id)
                );

                const emAltaSection = document.querySelector(".em-alta");

                const htmlSwiperCarosel = `
          <div class="container cro-carosel">
            <p class="cro-carosel__title">Os mais populares</p>
            <div class="swiper swiper-trending-courses">
              <div class="swiper-wrapper">
                ${filteredById
                        .map(
                            (course) => `
                  <div class="swiper-slide">
                    <div class="cro-content">
						<p class="cro-content__title">
							${course.name.includes("Tecnólogo") ? course.name.replace("Gestão de Recursos Humanos - Tecnólogo", "Gestão de RH") : course.name.includes("Licenciatura") ? course.name.replace(" - Licenciatura", "") : course.name.includes("Bacharelado") ? course.name.replace(" - Bacharelado", "") : course.name
                                }
						</p>
                      <p class="cro-content__type-and-time">
												${course.type}
												${course.duration !== null ? ` - ${course.duration} Semestres` : ""}
											</p>
                      <div class="cro-content__modality">
												<ul class="cro-content__modality-ul" id="subcategoryList_${course.unique_id}">
													${course.price_categories
                                    .map(
                                        (subcategory, index) => `
														<li class="cro-content__modality-item"
																data-price="${subcategory.price}" 
																data-description="${subcategory.description}"
																data-course-id="${course.unique_id}"
																data-subcategory-index="${index}"
														>
															${subcategory.category}
														</li>
													`
                                    )
                                    .join("")}
												</ul>
											</div>
                      <div id="subcategoryDetails_${course.unique_id}">
                        <!-- Detalhes da subcategoria serão exibidos aqui -->
                      </div>
                      <a href="/inscricao/?id=${course.unique_id
                                }" onclick="pushDataLayer('anhanguera:home', 'clique:card_carrossel', 'inscreva_se:${course.name
                                }')" class="btn btn-primary-hcontrast outlined rounded">Inscreva-se</a>
                    <a href="/curso/${course.slug.endsWith("-bacharelado") ? course.slug.replace(/-bacharelado/gi, "") : course.slug.endsWith("-tecnologo") ? course.slug.replace(/-tecnologo/gi, "") : course.slug.endsWith("-licenciatura") ? course.slug.replace(/-licenciatura/gi, "") : course.slug}" onclick="pushDataLayer('anhanguera:home', 'clique:card_carrossel', 'saiba-mais:${course.name}')" class="cro-content__btn-saiba-mais btn sm btn-color-bluegray outlined rounded">Saiba Mais</a>
                    </div>
                  </div>
                `
                        )
                        .join("")}
              </div>
              <div class="swiper-pagination"></div>
            </div>
            <div class="swiper-button-next" onclick="pushDataLayer('anhanguera:home', 'clique:scroll:carrossel', 'direita')">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M8.3997 4.42095C8.273 4.55351 8.17248 4.71098 8.10389 4.88433C8.0353 5.05768 8 5.2435 8 5.43118C8 5.61885 8.0353 5.80468 8.10389 5.97802C8.17248 6.15137 8.273 6.30884 8.3997 6.4414L13.7028 12.0012L8.3997 17.5611C8.27316 17.6938 8.17279 17.8513 8.10431 18.0246C8.03583 18.1979 8.00058 18.3837 8.00058 18.5713C8.00058 18.7589 8.03583 18.9447 8.10431 19.1181C8.17279 19.2914 8.27316 19.4489 8.3997 19.5816C8.52624 19.7142 8.67646 19.8195 8.84179 19.8912C9.00712 19.963 9.18432 20 9.36327 20C9.54222 20 9.71942 19.963 9.88475 19.8912C10.0501 19.8195 10.2003 19.7142 10.3268 19.5816L16.6003 13.0043C16.727 12.8717 16.8275 12.7143 16.8961 12.5409C16.9647 12.3676 17 12.1818 17 11.9941C17 11.8064 16.9647 11.6206 16.8961 11.4472C16.8275 11.2739 16.727 11.1164 16.6003 10.9839L10.3268 4.40662C9.80747 3.8621 8.93274 3.8621 8.3997 4.42095Z" fill="#808080"/>
							</svg>
						</div>
						<div class="swiper-button-prev" onclick="pushDataLayer('anhanguera:home', 'clique:scroll:carrossel', 'esquerda')">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M15.6003 19.5791C15.727 19.4465 15.8275 19.289 15.8961 19.1157C15.9647 18.9423 16 18.7565 16 18.5688C16 18.3812 15.9647 18.1953 15.8961 18.022C15.8275 17.8486 15.727 17.6912 15.6003 17.5586L10.2972 11.9988L15.6003 6.43891C15.7268 6.30624 15.8272 6.14875 15.8957 5.97541C15.9642 5.80208 15.9994 5.6163 15.9994 5.42868C15.9994 5.24106 15.9642 5.05528 15.8957 4.88195C15.8272 4.70861 15.7268 4.55111 15.6003 4.41845C15.4738 4.28578 15.3235 4.18055 15.1582 4.10875C14.9929 4.03695 14.8157 4 14.6367 4C14.4578 4 14.2806 4.03695 14.1152 4.10875C13.9499 4.18055 13.7997 4.28578 13.6732 4.41845L7.3997 10.9957C7.273 11.1283 7.17248 11.2857 7.10389 11.4591C7.0353 11.6324 7 11.8182 7 12.0059C7 12.1936 7.0353 12.3794 7.10389 12.5528C7.17248 12.7261 7.273 12.8836 7.3997 13.0161L13.6732 19.5934C14.1925 20.1379 15.0673 20.1379 15.6003 19.5791Z" fill="#808080"/>
							</svg>
						</div>
          </div>
        `;

                emAltaSection.innerHTML = htmlSwiperCarosel;

                // Adicionando detalhes da primeira subcategoria para cada curso e eventos de clique para cada lista de subcategorias
                filteredById.forEach((course) => {
                    const subcategoryList = document.getElementById(
                        `subcategoryList_${course.unique_id}`
                    );
                    const subcategoryDetails = document.getElementById(
                        `subcategoryDetails_${course.unique_id}`
                    );

                    if (subcategoryDetails && subcategoryList) {
                        const firstSubcategory = course.price_categories[0];

                        // Função para atualizar os detalhes da subcategoria
                        const updateSubcategoryDetails = (price, description) => {
                            const formattedPrice = parseFloat(price).toFixed(2).replace(".", ",");

                            subcategoryDetails.innerHTML = `
								<p class="cro-content__price">R$ ${formattedPrice}</p>
								<p class="cro-content__shift">
									<span class="shift__detail">Turnos: ${description}</span>
								</p>
							`;
                        };

                        // Função para destacar o item clicado e atualizar os detalhes
                        const handleSubcategoryClick = (clickedSubcategory) => {
                            const price = clickedSubcategory.getAttribute("data-price");
                            const description =
                                clickedSubcategory.getAttribute("data-description");

                            subcategoryList.querySelectorAll("li").forEach((item) => {
                                item.classList.remove("highlighted");
                            });

                            clickedSubcategory.classList.add("highlighted");
                            updateSubcategoryDetails(price, description);
                        };

                        // Adiciona evento de clique para cada lista de subcategorias
                        subcategoryList.addEventListener("click", (event) => {
                            const clickedSubcategory = event.target;
                            if (clickedSubcategory.tagName === "LI") {
                                handleSubcategoryClick(clickedSubcategory);
                            }
                        });

                        // Atualiza os detalhes para a primeira subcategoria e destaca o primeiro item
                        if (firstSubcategory) {
                            const { price, description } = firstSubcategory;
                            updateSubcategoryDetails(price, description);

                            const firstSubcategoryItem =
                                subcategoryList.querySelector("li:first-child");
                            if (firstSubcategoryItem) {
                                firstSubcategoryItem.classList.add("highlighted");
                            }
                        }
                    }
                });
                croLoadSwiper();
            })
            .catch((error) => {
                console.error("Erro ao buscar os dados da API:", error);
            });
    }

    fetchCourseData();
}

croCaroselTrendingCourses();
