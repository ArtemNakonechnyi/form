(function ($) {
  document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const openBtn = document.querySelector(".open-popup");
    const closeBtn = document.querySelector(".close-btn");

    function resetSpotsAnimation() {
      const spots = document.querySelectorAll(".spot");
      spots.forEach((spot) => {
        spot.classList.remove("animate-spot");
        void spot.offsetWidth;
        spot.classList.add("animate-spot");
      });
    }

    function removeSpotsAnimation() {
      const spots = document.querySelectorAll(".spot");
      spots.forEach((spot) => {
        spot.classList.remove("animate-spot");
      });
    }

    openBtn.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        popup.classList.add("show");
        resetSpotsAnimation();
      },
      { capture: true }
    );

    closeBtn.addEventListener(
      "click",
      (e) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        popup.classList.remove("show");
        removeSpotsAnimation();
        resetFormBlocks();
      },
      { capture: true }
    );

    window.addEventListener(
      "click",
      (e) => {
        if (e.target === popup) {
          e.stopPropagation();
          e.stopImmediatePropagation();
          popup.classList.remove("show");
          removeSpotsAnimation();
          resetFormBlocks();
        }
      },
      { capture: true }
    );
    function createInputField(id, type, name, placeholder, pattern = null) {
      var wrapper = document.createElement("div");
      wrapper.className = "form-input group";

      var input = document.createElement("input");
      input.id = id;
      input.type = type;
      input.name = name;
      input.required = true;
      input.placeholder = placeholder;
      if (pattern) {
        input.pattern = pattern;
      }
      wrapper.appendChild(input);
      return wrapper;
    }

    var container = document.getElementById("insert_rows");

    var firstNameField = createInputField(
      "cname",
      "text",
      "name",
      "First Name"
    );
    container.appendChild(firstNameField);

    var lastNameField = createInputField("lname", "text", "last", "Last Name");
    container.appendChild(lastNameField);

    var emailField = createInputField(
      "cemail",
      "email",
      "email",
      "email",
      "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
    );
    container.appendChild(emailField);

    // Кнопка GAIN ACCESS
    const showFormBtn = document.getElementById("showFormButton");
    const formSection = document.getElementById("formSection"); // блок с формой
    const form_section = document.getElementById("form_section"); // верхний блок

    showFormBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // Скрываем верхний блок полностью
      form_section.style.display = "none";
      // Показываем блок с формой (убираем .hidden, добавляем .visible)
      formSection.classList.remove("hidden");
      formSection.classList.add("visible");
    });

    // Функция, которая возвращает оба блока в исходное состояние
    function resetFormBlocks() {
      // Показываем верхний блок
      form_section.style.display = "flex";
      // Скрываем форму
      formSection.classList.remove("visible");
      formSection.classList.add("hidden");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    var honeypot = document.createElement("input");
    honeypot.type = "text";
    honeypot.name = "website";
    honeypot.id = "website";
    honeypot.style.position = "absolute";
    honeypot.style.left = "-9999px";
    honeypot.setAttribute("autocomplete", "off");
    document.getElementById("commentForm").appendChild(honeypot);
  });
  document.addEventListener("DOMContentLoaded", function () {
    var honeypot = document.createElement("input");
    honeypot.type = "text";
    honeypot.name = "url";
    honeypot.id = "url";
    honeypot.style.display = "none";
    honeypot.setAttribute("autocomplete", "off");
    document.getElementById("commentForm").appendChild(honeypot);
  });
  document.addEventListener("DOMContentLoaded", function () {
    var honeypot = document.createElement("input");
    honeypot.type = "text";
    honeypot.name = "comment";
    honeypot.id = "comment";
    honeypot.style.display = "none";
    honeypot.setAttribute("autocomplete", "off");
    document.getElementById("commentForm").appendChild(honeypot);
  });
  document.addEventListener("DOMContentLoaded", function () {
    var honeypot = document.createElement("input");
    honeypot.type = "text";
    honeypot.name = "notes";
    honeypot.id = "notes";
    honeypot.style.position = "absolute";
    honeypot.style.left = "-9999px";
    honeypot.setAttribute("autocomplete", "off");
    document.getElementById("commentForm").appendChild(honeypot);
  });

  $(document).ready(function () {
    var userLang = (
      navigator.language ||
      navigator.userLanguage ||
      "en"
    ).toLowerCase();
    userLang = userLang.substring(0, 2);
    if (userLang === "cz") {
      userLang = "cz";
    }
    var supportedLangs = ["cz", "sk", "de", "es", "fr", "it", "tr", "ro", "hu"];

    if (supportedLangs.indexOf(userLang) !== -1) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/localization/messages_" +
        userLang +
        ".js";
      document.getElementsByTagName("head")[0].appendChild(script);
    }

    // 1. Переопределяем встроенный метод email, чтобы требовалось наличие доменного расширения.
    jQuery.validator.methods.email = function (value, element) {
      return (
        this.optional(element) ||
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(value)
      );
    };

    // 2. Локализация плейсхолдеров и текста формы
    var localizedPlaceholders = {
      en: {
        // Долларовые регионы
        mainTitle:
          'Start with just <span class="form__accent-text">250$</span> <br> using our technology <br> <span class="form__accent-text">{_offer_value:name}</span>',
        title:
          'Only a few spots left! <br> Get access to <span class="form__accent-text">{_offer_value:name}</span>',
        left: "Spots available:",
        header: "Sign up and get started today",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "123 456 7890",
        button: "Sign up",
      },
      tr: {
        // Турция ~ 4800₺
        mainTitle:
          'Sadece <span class="form__accent-text">4800₺</span> <br> teknolojimizi kullanarak <br> <span class="form__accent-text">{_offer_value:name}</span>',
        title:
          'Sadece birkaç yer kaldı! <br> <span class="form__accent-text">{_offer_value:name}</span> erişimi edinin',
        left: "Mevcut yerler:",
        header: "Kaydolun ve bugün başlayın",
        firstName: "Ad",
        lastName: "Soyad",
        email: "E-posta",
        phone: "123 456 7890",
        button: "Kaydolun",
      },
      ru: {
        // Россия ~ 20 000₽
        mainTitle:
          'Начните всего с <span class="form__accent-text">20000₽</span> <br> используя нашу технологию <br> <span class="form__accent-text">{_offer_value:name}</span>',
        title:
          'Осталось всего несколько мест! <br> Получите доступ к <span class="form__accent-text">{_offer_value:name}</span>',
        left: "Доступно мест:",
        header: "Зарегистрируйтесь и начните уже сегодня",
        firstName: "Имя",
        lastName: "Фамилия",
        email: "Эл. почта",
        phone: "123 456 7890",
        button: "Зарегистрироваться",
      },
      cz: {
        // Чехия ~ 6000 Kč
        mainTitle:
          'Začněte jen s <span class="form__accent-text">6000&nbsp;Kč</span> <br> s využitím naší technologie <br> <span class="form__accent-text">{_offer_value:name}</span>',
        title:
          'Zbývá jen několik míst! <br> Získejte přístup k <span class="form__accent-text">{_offer_value:name}</span>',
        left: "Dostupná místa:",
        header: "Zaregistrujte se a začněte ještě dnes",
        firstName: "Jméno",
        lastName: "Příjmení",
        email: "E-mail",
        phone: "123 456 7890",
        button: "Registrovat se",
      },
      sk: {
        // Словакия ~ 240€
        mainTitle:
          'Začnite len s <span class="form__accent-text">240€</span> <br> využitím našej technológie <br> <span class="form__accent-text">{_offer_value:name}</span>',
        title:
          'Zostáva len niekoľko miest! <br> Získajte prístup k <span class="form__accent-text">{_offer_value:name}</span>',
        left: "Dostupné miesta:",
        header: "Zaregistrujte sa a začnite ešte dnes",
        firstName: "Meno",
        lastName: "Priezvisko",
        email: "E-mail",
        phone: "123 456 7890",
        button: "Registrovať sa",
      },
      de: {
        // Германия ~ 240€
        mainTitle:
          'Starten Sie mit nur <span class="form__accent-text">240€</span> <br> mithilfe unserer Technologie <br> <span class="form__accent-text">{_offer_value:name}</span>',
        title:
          'Nur noch wenige Plätze frei! <br> Erhalten Sie Zugang zu <span class="form__accent-text">{_offer_value:name}</span>',
        left: "Verfügbare Plätze:",
        header: "Melden Sie sich an und starten Sie noch heute",
        firstName: "Vorname",
        lastName: "Nachname",
        email: "E-Mail",
        phone: "123 456 7890",
        button: "Registrieren",
      },
      es: {
        // Испания ~ 240€
        mainTitle:
          'Comience con solo <span class="form__accent-text">240€</span> <br> utilizando nuestra tecnología <br> <span class="form__accent-text">{_offer_value:name}</span>',
        title:
          '¡Solo quedan unos pocos lugares! <br> Obtén acceso a <span class="form__accent-text">{_offer_value:name}</span>',
        left: "Plazas disponibles:",
        header: "Regístrate y comienza hoy mismo",
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Correo electrónico",
        phone: "123 456 7890",
        button: "Regístrate",
      },
      fr: {
        // Франция ~ 240€
        mainTitle:
          'Commencez avec seulement <span class="form__accent-text">240€</span> <br> grâce à notre technologie <br> <span class="form__accent-text">{_offer_value:name}</span>',
        title:
          'Il ne reste que quelques places ! <br> Accédez à <span class="form__accent-text">{_offer_value:name}</span>',
        left: "Places disponibles:",
        header: "Inscrivez-vous et commencez dès aujourd'hui",
        firstName: "Prénom",
        lastName: "Nom de famille",
        email: "E-mail",
        phone: "123 456 7890",
        button: "S'inscrire",
      },
      it: {
        // Италия ~ 240€
        mainTitle:
          'Inizia con soli <span class="form__accent-text">240€</span> <br> grazie alla nostra tecnologia <br> <span class="form__accent-text">{_offer_value:name}</span>',
        title:
          'Sono rimasti pochi posti! <br> Accedi a <span class="form__accent-text">{_offer_value:name}</span>',
        left: "Posti disponibili:",
        header: "Iscriviti e inizia oggi stesso",
        firstName: "Nome",
        lastName: "Cognome",
        email: "Email",
        phone: "123 456 7890",
        button: "Iscriviti",
      },
      ro: {
        // Румыния ~ 1200 RON
        mainTitle:
          'Începeți cu doar <span class="form__accent-text">1200&nbsp;RON</span> <br> cu ajutorul tehnologiei noastre <br> <span class="form__accent-text">{_offer_value:name}</span>',
        title:
          'Au mai rămas doar câteva locuri! <br> Obțineți acces la <span class="form__accent-text">{_offer_value:name}</span>',
        left: "Locuri disponibile:",
        header: "Înscrieți-vă și începeți astăzi",
        firstName: "Prenume",
        lastName: "Nume de familie",
        email: "Email",
        phone: "123 456 7890",
        button: "Înscrieți-vă",
      },
      hu: {
        // Венгрия ~ 90 000 HUF
        mainTitle:
          'Kezdje mindössze <span class="form__accent-text">90000&nbsp;Ft</span> <br> technológiánk segítségével <br> <span class="form__accent-text">{_offer_value:name}</span>',
        title:
          'Csak néhány hely maradt! <br> Szerezze meg a hozzáférést a <span class="form__accent-text">{_offer_value:name}</span> rendszerhez',
        left: "Elérhető helyek:",
        header: "Regisztráljon és kezdje el még ma",
        firstName: "Keresztnév",
        lastName: "Vezetéknév",
        email: "E-mail",
        phone: "123 456 7890",
        button: "Regisztráljon",
      },
      mx: {
        // Мексика ~ 5000 MXN
        mainTitle:
          'Comience con solo <span class="form__accent-text">5000&nbsp;MXN</span> <br> utilizando nuestra tecnología <br> <span class="form__accent-text">{_offer_value:name}</span>',
        title:
          '¡Solo quedan unos pocos lugares! <br> Obtén acceso a <span class="form__accent-text">{_offer_value:name}</span>',
        left: "Plazas disponibles:",
        header: "Regístrese y comience hoy",
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Correo electrónico",
        phone: "123 456 7890",
        button: "Registrarse",
      },
    };

    var userLang = (navigator.language || navigator.userLanguage || "en")
      .toLowerCase()
      .substring(0, 2);
    if (!localizedPlaceholders[userLang]) {
      userLang = "en";
    }

    var rawMainTitle = localizedPlaceholders[userLang].mainTitle;
    var rawFormTTitle = localizedPlaceholders[userLang].title;

    var scriptTag = document.getElementById("formScript");
    var offerValueName =
      scriptTag.getAttribute("data-offer-value") || "quantum ai";
    var currentDomain = scriptTag.getAttribute("data-current-domain");
    var finalMainTitle = rawMainTitle.replace(
      "{_offer_value:name}",
      offerValueName
    );
    var finalFormTitle = rawFormTTitle.replace(
      "{_offer_value:name}",
      offerValueName
    );
    $("#form-main-title").html(finalMainTitle);
    $("#form__title-1").html(finalFormTitle);

    $("#form-header-popup").text(localizedPlaceholders[userLang].header);
    $("#spots-left").text(localizedPlaceholders[userLang].left);
    $("#cname").attr("placeholder", localizedPlaceholders[userLang].firstName);
    $("#lname").attr("placeholder", localizedPlaceholders[userLang].lastName);
    $("#cemail").attr("placeholder", localizedPlaceholders[userLang].email);
    $("#phone").attr("placeholder", localizedPlaceholders[userLang].phone);
    $(".btn-main").text(localizedPlaceholders[userLang].button);

    var errorMessages = {
      en: [
        "Invalid country code", // index 0
        "Too short", // index 1
        "Too long", // index 2
        "Invalid number", // index 3
        "Phone number is required", // index 4
      ],
      cz: [
        "Neplatný kód země",
        "Příliš krátké",
        "Příliš dlouhé",
        "Neplatné číslo",
        "Telefonní číslo je povinné",
      ],
      sk: [
        "Neplatný kód krajiny",
        "Príliš krátke",
        "Príliš dlhé",
        "Neplatné číslo",
        "Telefónne číslo je povinné",
      ],
      de: [
        "Ungültiger Ländercode",
        "Zu kurz",
        "Zu lang",
        "Ungültige Nummer",
        "Telefonnummer ist erforderlich",
      ],
      es: [
        "Código de país inválido",
        "Demasiado corto",
        "Demasiado largo",
        "Número inválido",
        "El número de teléfono es obligatorio",
      ],
      fr: [
        "Code de pays invalide",
        "Trop court",
        "Trop long",
        "Numéro invalide",
        "Le numéro de téléphone est requis",
      ],
      it: [
        "Prefisso internazionale non valido",
        "Troppo corto",
        "Troppo lungo",
        "Numero non valido",
        "Il numero di telefono è obbligatorio",
      ],
      tr: [
        "Geçersiz ülke kodu",
        "Çok kısa",
        "Çok uzun",
        "Geçersiz numara",
        "Telefon numarası gereklidir",
      ],
      ro: [
        "Cod de țară invalid",
        "Prea scurt",
        "Prea lung",
        "Număr invalid",
        "Numărul de telefon este obligatoriu",
      ],
      hu: [
        "Érvénytelen országkód",
        "Túl rövid",
        "Túl hosszú",
        "Érvénytelen szám",
        "A telefonszám megadása kötelező",
      ],
    };

    var input = document.querySelector("#phone");
    var intlInstance = window.intlTelInput(input, {
      initialCountry: "auto",
      nationalMode: true,
      autoPlaceholder: "aggressive",
      formatOnDisplay: true,
      separateDialCode: true,
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
      geoIpLookup: function (setgeo) {
        fetch("https://ipinfo.io", {
          headers: { Accept: "application/json" },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            var country = data.country ? data.country.toLowerCase() : "ww";
            var countryLangMap = {
              cz: "cz",
              sk: "sk",
              de: "de",
              es: "es",
              fr: "fr",
              it: "it",
              tr: "tr",
              ro: "ro",
              hu: "hu",
            };
            userLang = countryLangMap[country] || "en";
            setgeo(country);
          })
          .catch(function () {
            setgeo("ww");
          });
      },
    });

    var reset = function () {
      $(input).removeClass("error");
      $("#error-msg").html("").addClass("hide");
    };

    input.addEventListener("blur", function () {
      reset();
      var number = input.value.trim();
      if (!number) return;

      try {
        var countryCode = intlInstance
          .getSelectedCountryData()
          .iso2.toUpperCase();
        var parsed = libphonenumber.parsePhoneNumber(number, countryCode);
        if (!parsed.isValid()) {
          $("#error-msg")
            .html(errorMessages[userLang][3] || "Invalid number")
            .removeClass("hide");
          $(input).addClass("error");
        }
      } catch (error) {
        if (error.message.includes("TOO_SHORT")) {
          $("#error-msg")
            .html(errorMessages[userLang][1] || "Too short")
            .removeClass("hide");
        } else if (error.message.includes("TOO_LONG")) {
          $("#error-msg")
            .html(errorMessages[userLang][2] || "Too long")
            .removeClass("hide");
        } else if (error.message.includes("INVALID_COUNTRY")) {
          $("#error-msg")
            .html(errorMessages[userLang][0] || "Invalid country code")
            .removeClass("hide");
        } else {
          $("#error-msg")
            .html("Invalid phone number format")
            .removeClass("hide");
        }
        $(input).addClass("error");
      }
    });
    input.addEventListener("change", reset);
    input.addEventListener("keyup", reset);

    function intlTelSetGeoCode(code) {
      $("input[name=country]").each(function () {
        $(this).val(code);
      });
    }
    function intlTelSetPhoneCode(code) {
      $(".phonecc").each(function () {
        $(this).val(code);
      });
    }
    input.addEventListener("countrychange", function () {
      var geo = intlInstance.getSelectedCountryData();
      intlTelSetPhoneCode(geo.dialCode);
      intlTelSetGeoCode(geo.iso2);
    });
    var initialData = intlInstance.getSelectedCountryData();
    if (initialData.dialCode) intlTelSetPhoneCode(initialData.dialCode);
    if (initialData.iso2) intlTelSetGeoCode(initialData.iso2);

    $(document).ready(function () {
      var antiSpam = new MainFormClass("#commentForm");

      $("#commentForm").validate({
        rules: {
          name: {
            required: true,
            minlength: 2,
          },
          last: {
            required: true,
            minlength: 2,
          },
          email: {
            required: true,
            email: true,
          },
        },
        submitHandler: function (form) {
          const subid = document.querySelector('input[name="subid"]').value;
          const name = document.querySelector('input[name="name"]').value;
          const lname = document.querySelector('input[name="last"]').value;
          const email = document.querySelector('input[name="email"]').value;
          const phone = document.querySelector('input[name="phone"]').value;
          const formbutton = document.querySelector("button[type=submit]");
          formbutton.disabled = true;
          var honeypotFields = $(
            "input[name='website'], input[name='url'], input[name='comment']"
          );

          var isBot = false;
          honeypotFields.each(function () {
            if ($(this).val().trim()) {
              isBot = true;
              return false;
            }
          });
          if (isBot) {
            formapi(subid, name, lname, email, phone);
            formbutton.disabled = false;
            return false;
          }

          var $phoneInput = $("input[name=phone]");
          var number = $phoneInput.val().trim();
          var errorMsg = document.getElementById("error-msg");
          if (!number) {
            $("#phone").addClass("error");
            alert(errorMessages[userLang][4] || "Phone number is required");
            formbutton.disabled = false;
            return false;
          }
          try {
            var countryCode = intlInstance
              .getSelectedCountryData()
              .iso2.toUpperCase();
            var parsed = libphonenumber.parsePhoneNumber(number, countryCode);
            if (!parsed.isValid()) {
              $("#phone").addClass("error");
              errorMsg.innerHTML =
                errorMessages[userLang][3] || "Invalid number";
              $("#error-msg").removeClass("hide");
              formbutton.disabled = false;
              return false;
            }
          } catch (error) {
            $("#phone").addClass("error");
            if (error.message.includes("TOO_SHORT")) {
              errorMsg.innerHTML = errorMessages[userLang][1] || "Too short";
            } else if (error.message.includes("TOO_LONG")) {
              errorMsg.innerHTML = errorMessages[userLang][2] || "Too long";
            } else if (error.message.includes("INVALID_COUNTRY")) {
              errorMsg.innerHTML =
                errorMessages[userLang][0] || "Invalid country code";
            } else {
              errorMsg.innerHTML = "Invalid phone number format";
            }
            $("#error-msg").removeClass("hide");
            formbutton.disabled = false;
            return false;
          }
          var countryData = intlInstance.getSelectedCountryData();
          $("input[name=phonecc]").val(countryData.dialCode);
          $("input[name=country]").val(countryData.iso2);

          if (
            !$("#cname").val().trim() ||
            !$("#lname").val().trim() ||
            !$("#cemail").val().trim() ||
            !$("#phone").val().trim()
          ) {
            formbutton.disabled = false;
            return false;
          }

          var timeElapsed = (Date.now() - antiSpam.startTime) / 1000;
          if (timeElapsed < 3) {
            formapi(subid, name, lname, email, phone);
            formbutton.disabled = false;
            return false;
          }
          if (antiSpam.mouseMovements < 3) {
            formapi(subid, name, lname, email, phone);
            formbutton.disabled = false;
            return false;
          }
          if (!antiSpam.focused) {
            formapi(subid, name, lname, email, phone);
            formbutton.disabled = false;
            return false;
          }
          if (
            antiSpam.form.offsetHeight > window.innerHeight &&
            !antiSpam.scrolled
          ) {
            antiSpam.score -= 5;
          }
          if (antiSpam.keyPressIntervals.length > 5) {
            const avgInterval =
              antiSpam.keyPressIntervals.reduce((sum, val) => sum + val, 0) /
              antiSpam.keyPressIntervals.length;
            if (avgInterval < 100) {
              antiSpam.score -= 5;
            }
            const variance =
              antiSpam.keyPressIntervals.reduce(
                (sum, val) => sum + Math.pow(val - avgInterval, 2),
                0
              ) / antiSpam.keyPressIntervals.length;
            const stdDev = Math.sqrt(variance);
            if (stdDev > 200) {
              antiSpam.score += 3;
            }
          }

          if (antiSpam.score < 100) {
            formapi(subid, name, lname, email, phone);
            formbutton.disabled = false;
            return false;
          }
          antiSpam.addDataToForm(timeElapsed);

          window.pendingForm = form;
          hcaptcha.execute();

          return false;
        },
      });
    });

    class MainFormClass {
      constructor(formSelector = "form") {
        this.form = document.querySelector(formSelector);
        if (!this.form) {
          console.warn("Форма с селектором не найдена.");
          return;
        }

        this.startTime = Date.now();
        this.mouseMovements = 0;
        this.keyPressIntervals = [];
        this.lastKeyTime = 0;
        this.focused = false;
        this.scrolled = false;
        this.score = 0; // Начальное значение

        this.init();
      }

      init() {
        this.trackMouseMovement();
        this.trackKeyPress();
        this.trackFocus();
        this.trackScroll();
      }

      trackMouseMovement() {
        document.addEventListener("mousemove", () => {
          this.mouseMovements++;
          this.score += 1; // Увеличили с 0.1 до 1
        });
      }

      trackKeyPress() {
        const inputs = this.form.querySelectorAll(
          'input[type="text"], input[type="email"], textarea'
        );
        inputs.forEach((input) => {
          input.addEventListener("keydown", () => {
            const now = Date.now();
            if (this.lastKeyTime > 0) {
              const interval = now - this.lastKeyTime;
              this.keyPressIntervals.push(interval);
              if (interval > 100 && interval < 1000) {
                this.score += 1; // Увеличили с 0.2 до 1
              }
            }
            this.lastKeyTime = now;
          });
        });
      }

      trackFocus() {
        const inputs = this.form.querySelectorAll("input, textarea, select");
        inputs.forEach((input) => {
          input.addEventListener("focus", () => {
            this.focused = true;
            this.score += 5; // Увеличили с 2 до 5
          });
        });
      }

      trackScroll() {
        window.addEventListener("scroll", () => {
          this.scrolled = true;
          this.score += 3; // Увеличили с 1 до 3
        });
      }

      addDataToForm(timeElapsed) {
        const fields = {
          form_time: timeElapsed,
          mouse_movements: this.mouseMovements,
          key_intervals:
            this.keyPressIntervals.length > 0
              ? this.keyPressIntervals.reduce((sum, val) => sum + val, 0) /
                this.keyPressIntervals.length
              : 0,
          human_score: this.score,
        };

        for (const [name, value] of Object.entries(fields)) {
          const field = document.createElement("input");
          field.type = "hidden";
          field.name = name;
          field.value = value;
          this.form.appendChild(field);
        }
      }
    }

    function formapi(subid, name, lname, email, phone) {
      fetch("../../../api/formapi.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subid, name, lname, email, phone }),
      }).then((response) => response.json());
    }
  });
})(jQuery);
