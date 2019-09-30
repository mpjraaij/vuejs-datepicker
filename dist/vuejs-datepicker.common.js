'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var Language =
/*#__PURE__*/
function () {
  function Language(language, months, monthsAbbr, days) {
    _classCallCheck(this, Language);

    this.language = language;
    this.months = months;
    this.monthsAbbr = monthsAbbr;
    this.days = days;
    this.rtl = false;
    this.ymd = false;
    this.yearSuffix = '';
  }

  _createClass(Language, [{
    key: "language",
    get: function get() {
      return this._language;
    },
    set: function set(language) {
      if (typeof language !== 'string') {
        throw new TypeError('Language must be a string');
      }

      this._language = language;
    }
  }, {
    key: "months",
    get: function get() {
      return this._months;
    },
    set: function set(months) {
      if (months.length !== 12) {
        throw new RangeError("There must be 12 months for ".concat(this.language, " language"));
      }

      this._months = months;
    }
  }, {
    key: "monthsAbbr",
    get: function get() {
      return this._monthsAbbr;
    },
    set: function set(monthsAbbr) {
      if (monthsAbbr.length !== 12) {
        throw new RangeError("There must be 12 abbreviated months for ".concat(this.language, " language"));
      }

      this._monthsAbbr = monthsAbbr;
    }
  }, {
    key: "days",
    get: function get() {
      return this._days;
    },
    set: function set(days) {
      if (days.length !== 7) {
        throw new RangeError("There must be 7 days for ".concat(this.language, " language"));
      }

      this._days = days;
    }
  }]);

  return Language;
}(); // eslint-disable-next-line

var en = new Language('English', ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']) // eslint-disable-next-line
;

var utils = {
  /**
   * @type {Boolean}
   */
  useUtc: false,

  /**
   * Returns the full year, using UTC or not
   * @param {Date} date
   */
  getFullYear: function getFullYear(date) {
    return this.useUtc ? date.getUTCFullYear() : date.getFullYear();
  },

  /**
   * Returns the month, using UTC or not
   * @param {Date} date
   */
  getMonth: function getMonth(date) {
    return this.useUtc ? date.getUTCMonth() : date.getMonth();
  },

  /**
   * Returns the date, using UTC or not
   * @param {Date} date
   */
  getDate: function getDate(date) {
    return this.useUtc ? date.getUTCDate() : date.getDate();
  },

  /**
   * Returns the day, using UTC or not
   * @param {Date} date
   */
  getDay: function getDay(date) {
    return this.useUtc ? date.getUTCDay() : date.getDay();
  },

  /**
   * Returns the hours, using UTC or not
   * @param {Date} date
   */
  getHours: function getHours(date) {
    return this.useUtc ? date.getUTCHours() : date.getHours();
  },

  /**
   * Returns the minutes, using UTC or not
   * @param {Date} date
   */
  getMinutes: function getMinutes(date) {
    return this.useUtc ? date.getUTCMinutes() : date.getMinutes();
  },

  /**
   * Sets the full year, using UTC or not
   * @param {Date} date
   */
  setFullYear: function setFullYear(date, value, useUtc) {
    return this.useUtc ? date.setUTCFullYear(value) : date.setFullYear(value);
  },

  /**
   * Sets the month, using UTC or not
   * @param {Date} date
   */
  setMonth: function setMonth(date, value, useUtc) {
    return this.useUtc ? date.setUTCMonth(value) : date.setMonth(value);
  },

  /**
   * Sets the date, using UTC or not
   * @param {Date} date
   * @param {Number} value
   */
  setDate: function setDate(date, value, useUtc) {
    return this.useUtc ? date.setUTCDate(value) : date.setDate(value);
  },

  /**
   * Check if date1 is equivalent to date2, without comparing the time
   * @see https://stackoverflow.com/a/6202196/4455925
   * @param {Date} date1
   * @param {Date} date2
   */
  compareDates: function compareDates(date1, date2) {
    var d1 = new Date(date1.getTime());
    var d2 = new Date(date2.getTime());

    if (this.useUtc) {
      d1.setUTCHours(0, 0, 0, 0);
      d2.setUTCHours(0, 0, 0, 0);
    } else {
      d1.setHours(0, 0, 0, 0);
      d2.setHours(0, 0, 0, 0);
    }

    return d1.getTime() === d2.getTime();
  },

  /**
   * Validates a date object
   * @param {Date} date - an object instantiated with the new Date constructor
   * @return {Boolean}
   */
  isValidDate: function isValidDate(date) {
    if (Object.prototype.toString.call(date) !== '[object Date]') {
      return false;
    }

    return !isNaN(date.getTime());
  },

  /**
   * Return abbreviated week day name
   * @param {Date}
   * @param {Array}
   * @return {String}
   */
  getDayNameAbbr: function getDayNameAbbr(date, days) {
    if (_typeof(date) !== 'object') {
      throw TypeError('Invalid Type');
    }

    return days[this.getDay(date)];
  },

  /**
   * Return name of the month
   * @param {Number|Date}
   * @param {Array}
   * @return {String}
   */
  getMonthName: function getMonthName(month, months) {
    if (!months) {
      throw Error('missing 2nd parameter Months array');
    }

    if (_typeof(month) === 'object') {
      return months[this.getMonth(month)];
    }

    if (typeof month === 'number') {
      return months[month];
    }

    throw TypeError('Invalid type');
  },

  /**
   * Return an abbreviated version of the month
   * @param {Number|Date}
   * @return {String}
   */
  getMonthNameAbbr: function getMonthNameAbbr(month, monthsAbbr) {
    if (!monthsAbbr) {
      throw Error('missing 2nd paramter Months array');
    }

    if (_typeof(month) === 'object') {
      return monthsAbbr[this.getMonth(month)];
    }

    if (typeof month === 'number') {
      return monthsAbbr[month];
    }

    throw TypeError('Invalid type');
  },

  /**
   * Alternative get total number of days in month
   * @param {Number} year
   * @param {Number} m
   * @return {Number}
   */
  daysInMonth: function daysInMonth(year, month) {
    return /8|3|5|10/.test(month) ? 30 : month === 1 ? !(year % 4) && year % 100 || !(year % 400) ? 29 : 28 : 31;
  },

  /**
   * Get nth suffix for date
   * @param {Number} day
   * @return {String}
   */
  getNthSuffix: function getNthSuffix(day) {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return 'st';

      case 2:
      case 22:
        return 'nd';

      case 3:
      case 23:
        return 'rd';

      default:
        return 'th';
    }
  },

  /**
   * Formats date object
   * @param {Date}
   * @param {String}
   * @param {Object}
   * @return {String}
   */
  formatDate: function formatDate(date, format, translation) {
    translation = !translation ? en : translation;
    var year = this.getFullYear(date);
    var month = this.getMonth(date) + 1;
    var day = this.getDate(date);
    var str = format.replace(/dd/, ('0' + day).slice(-2)).replace(/d/, day).replace(/yyyy/, year).replace(/yy/, String(year).slice(2)).replace(/MMMM/, this.getMonthName(this.getMonth(date), translation.months)).replace(/MMM/, this.getMonthNameAbbr(this.getMonth(date), translation.monthsAbbr)).replace(/MM/, ('0' + month).slice(-2)).replace(/M(?!a|ä|e)/, month).replace(/su/, this.getNthSuffix(this.getDate(date))).replace(/D(?!e|é|i)/, this.getDayNameAbbr(date, translation.days));
    return str;
  },

  /**
   * Creates an array of dates for each day in between two dates.
   * @param {Date} start
   * @param {Date} end
   * @return {Array}
   */
  createDateArray: function createDateArray(start, end) {
    var dates = [];

    while (start <= end) {
      dates.push(new Date(start));
      start = this.setDate(new Date(start), this.getDate(new Date(start)) + 1);
    }

    return dates;
  },

  /**
   * method used as a prop validator for input values
   * @param {*} val
   * @return {Boolean}
   */
  validateDateInput: function validateDateInput(val) {
    return val === null || val instanceof Date || typeof val === 'string' || typeof val === 'number';
  }
};
var makeDateUtils = function makeDateUtils(useUtc) {
  return _objectSpread({}, utils, {
    useUtc: useUtc
  });
};
var utils$1 = _objectSpread({}, utils) // eslint-disable-next-line
;

var script = {
  props: {
    selectedDate: Date,
    resetTypedDate: [Date],
    format: [String, Function],
    translation: Object,
    inline: Boolean,
    id: String,
    name: String,
    refName: String,
    openDate: Date,
    placeholder: String,
    inputClass: [String, Object, Array],
    clearButton: Boolean,
    clearButtonIcon: String,
    calendarButton: Boolean,
    calendarButtonIcon: String,
    calendarButtonIconContent: String,
    disabled: Boolean,
    required: Boolean,
    typeable: Boolean,
    bootstrapStyling: Boolean,
    useUtc: Boolean
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      input: null,
      typedDate: false,
      utils: constructedDateUtils
    };
  },
  computed: {
    formattedValue: function formattedValue() {
      if (!this.selectedDate) {
        return null;
      }

      if (this.typedDate) {
        return this.typedDate;
      }

      return typeof this.format === 'function' ? this.format(this.selectedDate) : this.utils.formatDate(new Date(this.selectedDate), this.format, this.translation);
    },
    computedInputClass: function computedInputClass() {
      if (this.bootstrapStyling) {
        if (typeof this.inputClass === 'string') {
          return [this.inputClass, 'form-control'].join(' ');
        }

        return _objectSpread({
          'form-control': true
        }, this.inputClass);
      }

      return this.inputClass;
    }
  },
  watch: {
    resetTypedDate: function resetTypedDate() {
      this.typedDate = false;
    }
  },
  methods: {
    showCalendar: function showCalendar() {
      this.$emit('showCalendar');
    },

    /**
     * Attempt to parse a typed date
     * @param {Event} event
     */
    parseTypedDate: function parseTypedDate(event) {
      // close calendar if escape or enter are pressed
      if ([27, // escape
      13 // enter
      ].includes(event.keyCode)) {
        this.input.blur();
      }

      if (this.typeable) {
        var typedDate = Date.parse(this.input.value);

        if (!isNaN(typedDate)) {
          this.typedDate = this.input.value;
          this.$emit('typedDate', new Date(this.typedDate));
        }
      }
    },

    /**
     * nullify the typed date to defer to regular formatting
     * called once the input is blurred
     */
    inputBlurred: function inputBlurred() {
      if (this.typeable && isNaN(Date.parse(this.input.value))) {
        this.clearDate();
        this.input.value = null;
        this.typedDate = null;
      }

      this.$emit('closeCalendar');
    },

    /**
     * emit a clearDate event
     */
    clearDate: function clearDate() {
      this.$emit('clearDate');
    }
  },
  mounted: function mounted() {
    this.input = this.$el.querySelector('input');
  }
} // eslint-disable-next-line
;

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: { "input-group": _vm.bootstrapStyling } },
    [
      _vm.calendarButton
        ? _c(
            "span",
            {
              staticClass: "vdp-datepicker__calendar-button",
              class: { "input-group-prepend": _vm.bootstrapStyling },
              style: { "cursor:not-allowed;": _vm.disabled },
              on: { click: _vm.showCalendar }
            },
            [
              _c(
                "span",
                { class: { "input-group-text": _vm.bootstrapStyling } },
                [
                  _c("i", { class: _vm.calendarButtonIcon }, [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.calendarButtonIconContent) +
                        "\n        "
                    ),
                    !_vm.calendarButtonIcon
                      ? _c("span", [_vm._v("…")])
                      : _vm._e()
                  ])
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("input", {
        ref: _vm.refName,
        class: _vm.computedInputClass,
        attrs: {
          type: _vm.inline ? "hidden" : "text",
          name: _vm.name,
          id: _vm.id,
          "open-date": _vm.openDate,
          placeholder: _vm.placeholder,
          "clear-button": _vm.clearButton,
          disabled: _vm.disabled,
          required: _vm.required,
          readonly: !_vm.typeable,
          autocomplete: "off"
        },
        domProps: { value: _vm.formattedValue },
        on: {
          click: _vm.showCalendar,
          keyup: _vm.parseTypedDate,
          blur: _vm.inputBlurred
        }
      }),
      _vm._v(" "),
      _vm.clearButton && _vm.selectedDate
        ? _c(
            "span",
            {
              staticClass: "vdp-datepicker__clear-button",
              class: { "input-group-append": _vm.bootstrapStyling },
              on: {
                click: function($event) {
                  return _vm.clearDate()
                }
              }
            },
            [
              _c(
                "span",
                { class: { "input-group-text": _vm.bootstrapStyling } },
                [
                  _c("i", { class: _vm.clearButtonIcon }, [
                    !_vm.clearButtonIcon ? _c("span", [_vm._v("×")]) : _vm._e()
                  ])
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._t("afterDateInput")
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var DateInput = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var script$1 = {
  props: {
    showDayView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    fullMonthName: Boolean,
    allowedToShowView: Function,
    dayCellContent: {
      type: Function,
      "default": function _default(day) {
        return day.date;
      }
    },
    disabledDates: Object,
    highlighted: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    mondayFirst: Boolean,
    useUtc: Boolean
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils
    };
  },
  computed: {
    /**
     * Returns an array of day names
     * @return {String[]}
     */
    daysOfWeek: function daysOfWeek() {
      if (this.mondayFirst) {
        var tempDays = this.translation.days.slice();
        tempDays.push(tempDays.shift());
        return tempDays;
      }

      return this.translation.days;
    },

    /**
     * Returns the day number of the week less one for the first of the current month
     * Used to show amount of empty cells before the first in the day calendar layout
     * @return {Number}
     */
    blankDays: function blankDays() {
      var d = this.pageDate;
      var days = [];
      var dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)) : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
      var daysInMonth = this.utils.daysInMonth(this.utils.getFullYear(dObj), this.utils.getMonth(dObj));

      if (this.mondayFirst) {
        var _c = this.utils.getDay(dObj) > 0 ? this.utils.getDay(dObj) - 1 : 6;

        this.utils.setDate(dObj, this.utils.getDate(dObj) + (daysInMonth - _c));

        for (var i = 0; i < _c; i++) {
          days.push({
            date: this.utils.getDate(dObj),
            timestamp: dObj.getTime(),
            isPreviousMonth: true,
            isLastItem: i === _c - 1,
            isSelected: this.isSelectedDate(dObj),
            isDisabled: true,
            isHighlighted: this.isHighlightedDate(dObj),
            isHighlightStart: this.isHighlightStart(dObj),
            isHighlightEnd: this.isHighlightEnd(dObj),
            isToday: this.utils.compareDates(dObj, new Date()),
            isWeekend: this.utils.getDay(dObj) === 0 || this.utils.getDay(dObj) === 6,
            isSaturday: this.utils.getDay(dObj) === 6,
            isSunday: this.utils.getDay(dObj) === 0
          });
          this.utils.setDate(dObj, this.utils.getDate(dObj) + 1);
        }

        return days;
      }

      var c = this.utils.getDay(dObj);
      this.utils.setDate(dObj, this.utils.getDate(dObj) + (daysInMonth - c));

      for (var _i = 0; _i < c; _i++) {
        days.push({
          date: this.utils.getDate(dObj),
          timestamp: dObj.getTime(),
          isPreviousMonth: true,
          isLastItem: _i === c - 1,
          isSelected: this.isSelectedDate(dObj),
          isDisabled: this.isDisabledDate(dObj),
          isHighlighted: this.isHighlightedDate(dObj),
          isHighlightStart: this.isHighlightStart(dObj),
          isHighlightEnd: this.isHighlightEnd(dObj),
          isToday: this.utils.compareDates(dObj, new Date()),
          isWeekend: this.utils.getDay(dObj) === 0 || this.utils.getDay(dObj) === 6,
          isSaturday: this.utils.getDay(dObj) === 6,
          isSunday: this.utils.getDay(dObj) === 0
        });
        this.utils.setDate(dObj, this.utils.getDate(dObj) + 1);
      }

      return days;
    },
    comingDays: function comingDays() {
      var d = this.pageDate;
      var days = [];
      var dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 1)) : new Date(d.getFullYear(), d.getMonth() + 1, 1, d.getHours(), d.getMinutes());
      var dayCount = this.blankDays.length + this.days.length;
      var totalDays = dayCount > 35 ? 42 : 35;
      var leftOver = totalDays % dayCount;
      this.utils.setDate(dObj, this.utils.getDate(dObj));

      for (var i = 0; i < leftOver; i++) {
        days.push({
          date: this.utils.getDate(dObj),
          timestamp: dObj.getTime(),
          isNextMonth: true,
          isFirstItem: i === 0,
          isSelected: this.isSelectedDate(dObj),
          isDisabled: true,
          isHighlighted: this.isHighlightedDate(dObj),
          isHighlightStart: this.isHighlightStart(dObj),
          isHighlightEnd: this.isHighlightEnd(dObj),
          isToday: this.utils.compareDates(dObj, new Date()),
          isWeekend: this.utils.getDay(dObj) === 0 || this.utils.getDay(dObj) === 6,
          isSaturday: this.utils.getDay(dObj) === 6,
          isSunday: this.utils.getDay(dObj) === 0
        });
        this.utils.setDate(dObj, this.utils.getDate(dObj) + 1);
      }

      return days;
    },

    /**
     * @return {Object[]}
     */
    days: function days() {
      var d = this.pageDate;
      var days = []; // set up a new date object to the beginning of the current 'page'

      var dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)) : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
      var daysInMonth = this.utils.daysInMonth(this.utils.getFullYear(dObj), this.utils.getMonth(dObj));

      for (var i = 0; i < daysInMonth; i++) {
        days.push({
          date: this.utils.getDate(dObj),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedDate(dObj),
          isDisabled: this.isDisabledDate(dObj),
          isHighlighted: this.isHighlightedDate(dObj),
          isHighlightStart: this.isHighlightStart(dObj),
          isHighlightEnd: this.isHighlightEnd(dObj),
          isToday: this.utils.compareDates(dObj, new Date()),
          isWeekend: this.utils.getDay(dObj) === 0 || this.utils.getDay(dObj) === 6,
          isSaturday: this.utils.getDay(dObj) === 6,
          isSunday: this.utils.getDay(dObj) === 0
        });
        this.utils.setDate(dObj, this.utils.getDate(dObj) + 1);
      }

      return days;
    },

    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */
    currMonthName: function currMonthName() {
      var monthName = this.fullMonthName ? this.translation.months : this.translation.monthsAbbr;
      return this.utils.getMonthNameAbbr(this.utils.getMonth(this.pageDate), monthName);
    },

    /**
     * Gets the name of the year that current page is on
     * @return {Number}
     */
    currYearName: function currYearName() {
      var yearSuffix = this.translation.yearSuffix;
      return "".concat(this.utils.getFullYear(this.pageDate)).concat(yearSuffix);
    },

    /**
     * Is this translation using year/month/day format?
     * @return {Boolean}
     */
    isYmd: function isYmd() {
      return this.translation.ymd && this.translation.ymd === true;
    },

    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled() {
      return this.isRtl ? this.isNextMonthDisabled(this.pageTimestamp) : this.isPreviousMonthDisabled(this.pageTimestamp);
    },

    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled() {
      return this.isRtl ? this.isPreviousMonthDisabled(this.pageTimestamp) : this.isNextMonthDisabled(this.pageTimestamp);
    },
    allDays: function allDays() {
      var allDays = [].concat(_toConsumableArray(this.blankDays), _toConsumableArray(this.days), _toConsumableArray(this.comingDays));
      var i;
      var j;
      var chunkedDays = [];
      var fullWeek = [];
      var chunk = 7;

      for (i = 0, j = allDays.length; i < j; i += chunk) {
        chunkedDays = allDays.slice(i, i + chunk);
        fullWeek.push(chunkedDays);
      }

      return fullWeek;
    }
  },
  methods: {
    selectDate: function selectDate(date) {
      if (date.isDisabled) {
        this.$emit('selectedDisabled', date);
        return false;
      }

      this.$emit('selectDate', date);
    },

    /**
     * @return {Number}
     */
    getPageMonth: function getPageMonth() {
      return this.utils.getMonth(this.pageDate);
    },

    /**
     * Emit an event to show the month picker
     */
    showMonthCalendar: function showMonthCalendar() {
      this.$emit('showMonthCalendar');
    },

    /**
     * Change the page month
     * @param {Number} incrementBy
     */
    changeMonth: function changeMonth(incrementBy) {
      var date = this.pageDate;
      this.utils.setMonth(date, this.utils.getMonth(date) + incrementBy);
      this.$emit('changedMonth', date);
    },

    /**
     * Decrement the page month
     */
    previousMonth: function previousMonth() {
      if (!this.isPreviousMonthDisabled()) {
        this.changeMonth(-1);
      }
    },

    /**
     * Is the previous month disabled?
     * @return {Boolean}
     */
    isPreviousMonthDisabled: function isPreviousMonthDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false;
      }

      var d = this.pageDate;
      return this.utils.getMonth(this.disabledDates.to) >= this.utils.getMonth(d) && this.utils.getFullYear(this.disabledDates.to) >= this.utils.getFullYear(d);
    },

    /**
     * Increment the current page month
     */
    nextMonth: function nextMonth() {
      if (!this.isNextMonthDisabled()) {
        this.changeMonth(+1);
      }
    },

    /**
     * Is the next month disabled?
     * @return {Boolean}
     */
    isNextMonthDisabled: function isNextMonthDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false;
      }

      var d = this.pageDate;
      return this.utils.getMonth(this.disabledDates.from) <= this.utils.getMonth(d) && this.utils.getFullYear(this.disabledDates.from) <= this.utils.getFullYear(d);
    },

    /**
     * Whether a day is selected
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedDate: function isSelectedDate(dObj) {
      return this.selectedDate && this.utils.compareDates(this.selectedDate, dObj);
    },

    /**
     * Whether a day is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledDate: function isDisabledDate(date) {
      var _this = this;

      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined') {
        return false;
      }

      if (typeof this.disabledDates.dates !== 'undefined') {
        this.disabledDates.dates.forEach(function (d) {
          if (_this.utils.compareDates(date, d)) {
            disabledDates = true;
            return true;
          }
        });
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to && date < this.disabledDates.to) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from && date > this.disabledDates.from) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.ranges !== 'undefined') {
        this.disabledDates.ranges.forEach(function (range) {
          if (typeof range.from !== 'undefined' && range.from && typeof range.to !== 'undefined' && range.to) {
            if (date < range.to && date > range.from) {
              disabledDates = true;
              return true;
            }
          }
        });
      }

      if (typeof this.disabledDates.days !== 'undefined' && this.disabledDates.days.indexOf(this.utils.getDay(date)) !== -1) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.daysOfMonth !== 'undefined' && this.disabledDates.daysOfMonth.indexOf(this.utils.getDate(date)) !== -1) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    },

    /**
     * Whether a day is highlighted (only if it is not disabled already except when highlighted.includeDisabled is true)
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightedDate: function isHighlightedDate(date) {
      var _this2 = this;

      if (!(this.highlighted && this.highlighted.includeDisabled) && this.isDisabledDate(date)) {
        return false;
      }

      var highlighted = false;

      if (typeof this.highlighted === 'undefined') {
        return false;
      }

      if (typeof this.highlighted.dates !== 'undefined') {
        this.highlighted.dates.forEach(function (d) {
          if (_this2.utils.compareDates(date, d)) {
            highlighted = true;
            return true;
          }
        });
      }

      if (this.isDefined(this.highlighted.from) && this.isDefined(this.highlighted.to)) {
        highlighted = date >= this.highlighted.from && date <= this.highlighted.to;
      }

      if (typeof this.highlighted.days !== 'undefined' && this.highlighted.days.indexOf(this.utils.getDay(date)) !== -1) {
        highlighted = true;
      }

      if (typeof this.highlighted.daysOfMonth !== 'undefined' && this.highlighted.daysOfMonth.indexOf(this.utils.getDate(date)) !== -1) {
        highlighted = true;
      }

      if (typeof this.highlighted.customPredictor === 'function' && this.highlighted.customPredictor(date)) {
        highlighted = true;
      }

      return highlighted;
    },
    dayClasses: function dayClasses(day) {
      return {
        'available': true,
        'active': day.isSelected,
        'disabled': day.isDisabled,
        'selected': day.isHighlighted || day.isHighlightStart || day.isHighlightEnd,
        'off': day.isPreviousMonth || day.isNextMonth,
        'in-range': day.isPreviousMonth && !day.isLastItem || day.isNextMonth && !day.isFirstItem || day.isHighlighted && !day.isHighlightStart && !day.isHighlightEnd,
        'today': day.isToday,
        'weekend': day.isWeekend,
        'saturday': day.isSaturday,
        'sunday': day.isSunday,
        'start-date': day.isHighlightStart || day.isNextMonth && day.isFirstItem && !day.isHighlighted,
        'end-date': day.isHighlightEnd || day.isPreviousMonth && day.isLastItem && !day.isHighlighted
      };
    },

    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightStart: function isHighlightStart(date) {
      return this.isHighlightedDate(date) && this.highlighted.from instanceof Date && this.utils.getFullYear(this.highlighted.from) === this.utils.getFullYear(date) && this.utils.getMonth(this.highlighted.from) === this.utils.getMonth(date) && this.utils.getDate(this.highlighted.from) === this.utils.getDate(date);
    },

    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightEnd: function isHighlightEnd(date) {
      return this.isHighlightedDate(date) && this.highlighted.to instanceof Date && this.utils.getFullYear(this.highlighted.to) === this.utils.getFullYear(date) && this.utils.getMonth(this.highlighted.to) === this.utils.getMonth(date) && this.utils.getDate(this.highlighted.to) === this.utils.getDate(date);
    },

    /**
     * Helper
     * @param  {mixed}  prop
     * @return {Boolean}
     */
    isDefined: function isDefined(prop) {
      return typeof prop !== 'undefined' && prop;
    }
  } // eslint-disable-next-line

};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showDayView,
          expression: "showDayView"
        }
      ],
      class: [_vm.calendarClass, "calendar-table"],
      style: _vm.calendarStyle,
      on: {
        mousedown: function($event) {
          $event.preventDefault();
        }
      }
    },
    [
      _vm._t("beforeCalendarHeader"),
      _vm._v(" "),
      _c("table", { staticClass: "table-condensed" }, [
        _c("thead", [
          _c("tr", [
            _c(
              "th",
              {
                staticClass: "prev available",
                on: {
                  click: function($event) {
                    _vm.isRtl ? _vm.nextMonth() : _vm.previousMonth();
                  }
                }
              },
              [_c("span")]
            ),
            _vm._v(" "),
            _c("th", { staticClass: "month", attrs: { colspan: "5" } }, [
              _vm._v(
                _vm._s(_vm.isYmd ? _vm.currYearName : _vm.currMonthName) +
                  " " +
                  _vm._s(_vm.isYmd ? _vm.currMonthName : _vm.currYearName)
              )
            ]),
            _vm._v(" "),
            _c(
              "th",
              {
                staticClass: "next available",
                on: {
                  click: function($event) {
                    _vm.isRtl ? _vm.previousMonth() : _vm.nextMonth();
                  }
                }
              },
              [_c("span")]
            )
          ]),
          _vm._v(" "),
          _c(
            "tr",
            _vm._l(_vm.daysOfWeek, function(d) {
              return _c("th", { key: d.timestamp }, [
                _vm._v("\n            " + _vm._s(d.charAt(0)) + "\n          ")
              ])
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.allDays, function(week, index) {
            return _c(
              "tr",
              { key: index + 1 },
              _vm._l(week, function(day) {
                return _c(
                  "td",
                  { key: day.timestamp, class: _vm.dayClasses(day) },
                  [
                    _c("span", {
                      domProps: { innerHTML: _vm._s(_vm.dayCellContent(day)) },
                      on: {
                        click: function($event) {
                          return _vm.selectDate(day)
                        }
                      }
                    })
                  ]
                )
              }),
              0
            )
          }),
          0
        )
      ])
    ],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PickerDay = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

//
var script$2 = {
  props: {
    showMonthView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    disabledDates: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    allowedToShowView: Function,
    useUtc: Boolean
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils
    };
  },
  computed: {
    months: function months() {
      var d = this.pageDate;
      var months = []; // set up a new date object to the beginning of the current 'page'

      var dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), 0, d.getUTCDate())) : new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes());

      for (var i = 0; i < 12; i++) {
        months.push({
          month: this.utils.getMonthName(i, this.translation.months),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedMonth(dObj),
          isDisabled: this.isDisabledMonth(dObj)
        });
        this.utils.setMonth(dObj, this.utils.getMonth(dObj) + 1);
      }

      return months;
    },

    /**
     * Get year name on current page.
     * @return {String}
     */
    pageYearName: function pageYearName() {
      var yearSuffix = this.translation.yearSuffix;
      return "".concat(this.utils.getFullYear(this.pageDate)).concat(yearSuffix);
    },

    /**
     * Is the left hand navigation disabled
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled() {
      return this.isRtl ? this.isNextYearDisabled(this.pageTimestamp) : this.isPreviousYearDisabled(this.pageTimestamp);
    },

    /**
     * Is the right hand navigation disabled
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled() {
      return this.isRtl ? this.isPreviousYearDisabled(this.pageTimestamp) : this.isNextYearDisabled(this.pageTimestamp);
    }
  },
  methods: {
    /**
     * Emits a selectMonth event
     * @param {Object} month
     */
    selectMonth: function selectMonth(month) {
      if (month.isDisabled) {
        return false;
      }

      this.$emit('selectMonth', month);
    },

    /**
     * Changes the year up or down
     * @param {Number} incrementBy
     */
    changeYear: function changeYear(incrementBy) {
      var date = this.pageDate;
      this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy);
      this.$emit('changedYear', date);
    },

    /**
     * Decrements the year
     */
    previousYear: function previousYear() {
      if (!this.isPreviousYearDisabled()) {
        this.changeYear(-1);
      }
    },

    /**
     * Checks if the previous year is disabled or not
     * @return {Boolean}
     */
    isPreviousYearDisabled: function isPreviousYearDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false;
      }

      return this.utils.getFullYear(this.disabledDates.to) >= this.utils.getFullYear(this.pageDate);
    },

    /**
     * Increments the year
     */
    nextYear: function nextYear() {
      if (!this.isNextYearDisabled()) {
        this.changeYear(1);
      }
    },

    /**
     * Checks if the next year is disabled or not
     * @return {Boolean}
     */
    isNextYearDisabled: function isNextYearDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false;
      }

      return this.utils.getFullYear(this.disabledDates.from) <= this.utils.getFullYear(this.pageDate);
    },

    /**
     * Emits an event that shows the year calendar
     */
    showYearCalendar: function showYearCalendar() {
      this.$emit('showYearCalendar');
    },

    /**
     * Whether the selected date is in this month
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedMonth: function isSelectedMonth(date) {
      return this.selectedDate && this.utils.getFullYear(this.selectedDate) === this.utils.getFullYear(date) && this.utils.getMonth(this.selectedDate) === this.utils.getMonth(date);
    },

    /**
     * Whether a month is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledMonth: function isDisabledMonth(date) {
      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined') {
        return false;
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
        if (this.utils.getMonth(date) < this.utils.getMonth(this.disabledDates.to) && this.utils.getFullYear(date) <= this.utils.getFullYear(this.disabledDates.to) || this.utils.getFullYear(date) < this.utils.getFullYear(this.disabledDates.to)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
        if (this.utils.getMonth(date) > this.utils.getMonth(this.disabledDates.from) && this.utils.getFullYear(date) >= this.utils.getFullYear(this.disabledDates.from) || this.utils.getFullYear(date) > this.utils.getFullYear(this.disabledDates.from)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    }
  } // eslint-disable-next-line

};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showMonthView,
          expression: "showMonthView"
        }
      ],
      class: [_vm.calendarClass, "vdp-datepicker__calendar"],
      style: _vm.calendarStyle,
      on: {
        mousedown: function($event) {
          $event.preventDefault();
        }
      }
    },
    [
      _vm._t("beforeCalendarHeader"),
      _vm._v(" "),
      _c("header", [
        _c(
          "span",
          {
            staticClass: "prev",
            class: { disabled: _vm.isLeftNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.nextYear() : _vm.previousYear();
              }
            }
          },
          [_vm._v("<")]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "month__year_btn",
            class: _vm.allowedToShowView("year") ? "up" : "",
            on: { click: _vm.showYearCalendar }
          },
          [_vm._v(_vm._s(_vm.pageYearName))]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "next",
            class: { disabled: _vm.isRightNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.previousYear() : _vm.nextYear();
              }
            }
          },
          [_vm._v(">")]
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.months, function(month) {
        return _c(
          "span",
          {
            key: month.timestamp,
            staticClass: "cell month",
            class: { selected: month.isSelected, disabled: month.isDisabled },
            on: {
              click: function($event) {
                $event.stopPropagation();
                return _vm.selectMonth(month)
              }
            }
          },
          [_vm._v(_vm._s(month.month))]
        )
      })
    ],
    2
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PickerMonth = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

//
var script$3 = {
  props: {
    showYearView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    disabledDates: Object,
    highlighted: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    allowedToShowView: Function,
    useUtc: Boolean
  },
  computed: {
    years: function years() {
      var d = this.pageDate;
      var years = []; // set up a new date object to the beginning of the current 'page'7

      var dObj = this.useUtc ? new Date(Date.UTC(Math.floor(d.getUTCFullYear() / 10) * 10, d.getUTCMonth(), d.getUTCDate())) : new Date(Math.floor(d.getFullYear() / 10) * 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());

      for (var i = 0; i < 10; i++) {
        years.push({
          year: this.utils.getFullYear(dObj),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedYear(dObj),
          isDisabled: this.isDisabledYear(dObj)
        });
        this.utils.setFullYear(dObj, this.utils.getFullYear(dObj) + 1);
      }

      return years;
    },

    /**
     * @return {String}
     */
    getPageDecade: function getPageDecade() {
      var decadeStart = Math.floor(this.utils.getFullYear(this.pageDate) / 10) * 10;
      var decadeEnd = decadeStart + 9;
      var yearSuffix = this.translation.yearSuffix;
      return "".concat(decadeStart, " - ").concat(decadeEnd).concat(yearSuffix);
    },

    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled() {
      return this.isRtl ? this.isNextDecadeDisabled(this.pageTimestamp) : this.isPreviousDecadeDisabled(this.pageTimestamp);
    },

    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled() {
      return this.isRtl ? this.isPreviousDecadeDisabled(this.pageTimestamp) : this.isNextDecadeDisabled(this.pageTimestamp);
    }
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils
    };
  },
  methods: {
    selectYear: function selectYear(year) {
      if (year.isDisabled) {
        return false;
      }

      this.$emit('selectYear', year);
    },
    changeYear: function changeYear(incrementBy) {
      var date = this.pageDate;
      this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy);
      this.$emit('changedDecade', date);
    },
    previousDecade: function previousDecade() {
      if (this.isPreviousDecadeDisabled()) {
        return false;
      }

      this.changeYear(-10);
    },
    isPreviousDecadeDisabled: function isPreviousDecadeDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false;
      }

      var disabledYear = this.utils.getFullYear(this.disabledDates.to);
      var lastYearInPreviousPage = Math.floor(this.utils.getFullYear(this.pageDate) / 10) * 10 - 1;
      return disabledYear > lastYearInPreviousPage;
    },
    nextDecade: function nextDecade() {
      if (this.isNextDecadeDisabled()) {
        return false;
      }

      this.changeYear(10);
    },
    isNextDecadeDisabled: function isNextDecadeDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false;
      }

      var disabledYear = this.utils.getFullYear(this.disabledDates.from);
      var firstYearInNextPage = Math.ceil(this.utils.getFullYear(this.pageDate) / 10) * 10;
      return disabledYear < firstYearInNextPage;
    },

    /**
     * Whether the selected date is in this year
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedYear: function isSelectedYear(date) {
      return this.selectedDate && this.utils.getFullYear(this.selectedDate) === this.utils.getFullYear(date);
    },

    /**
     * Whether a year is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledYear: function isDisabledYear(date) {
      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined' || !this.disabledDates) {
        return false;
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
        if (this.utils.getFullYear(date) < this.utils.getFullYear(this.disabledDates.to)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
        if (this.utils.getFullYear(date) > this.utils.getFullYear(this.disabledDates.from)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    }
  } // eslint-disable-next-line

};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showYearView,
          expression: "showYearView"
        }
      ],
      class: [_vm.calendarClass, "vdp-datepicker__calendar"],
      style: _vm.calendarStyle,
      on: {
        mousedown: function($event) {
          $event.preventDefault();
        }
      }
    },
    [
      _vm._t("beforeCalendarHeader"),
      _vm._v(" "),
      _c("header", [
        _c(
          "span",
          {
            staticClass: "prev",
            class: { disabled: _vm.isLeftNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.nextDecade() : _vm.previousDecade();
              }
            }
          },
          [_vm._v("<")]
        ),
        _vm._v(" "),
        _c("span", [_vm._v(_vm._s(_vm.getPageDecade))]),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "next",
            class: { disabled: _vm.isRightNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.previousDecade() : _vm.nextDecade();
              }
            }
          },
          [_vm._v(">")]
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.years, function(year) {
        return _c(
          "span",
          {
            key: year.timestamp,
            staticClass: "cell year",
            class: { selected: year.isSelected, disabled: year.isDisabled },
            on: {
              click: function($event) {
                $event.stopPropagation();
                return _vm.selectYear(year)
              }
            }
          },
          [_vm._v(_vm._s(year.year))]
        )
      })
    ],
    2
  )
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PickerYear = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

//
var script$4 = {
  components: {
    DateInput: DateInput,
    PickerDay: PickerDay,
    PickerMonth: PickerMonth,
    PickerYear: PickerYear
  },
  props: {
    value: {
      validator: function validator(val) {
        return utils$1.validateDateInput(val);
      }
    },
    name: String,
    refName: String,
    id: String,
    format: {
      type: [String, Function],
      "default": 'dd MMM yyyy'
    },
    language: {
      type: Object,
      "default": function _default() {
        return en;
      }
    },
    openDate: {
      validator: function validator(val) {
        return utils$1.validateDateInput(val);
      }
    },
    dayCellContent: Function,
    fullMonthName: Boolean,
    disabledDates: Object,
    highlighted: Object,
    placeholder: String,
    inline: Boolean,
    calendarClass: [String, Object, Array],
    inputClass: [String, Object, Array],
    wrapperClass: [String, Object, Array],
    mondayFirst: Boolean,
    clearButton: Boolean,
    clearButtonIcon: String,
    calendarButton: Boolean,
    calendarButtonIcon: String,
    calendarButtonIconContent: String,
    bootstrapStyling: Boolean,
    initialView: String,
    disabled: Boolean,
    required: Boolean,
    typeable: Boolean,
    useUtc: Boolean,
    minimumView: {
      type: String,
      "default": 'day'
    },
    maximumView: {
      type: String,
      "default": 'year'
    }
  },
  data: function data() {
    var startDate = this.openDate ? new Date(this.openDate) : new Date();
    var constructedDateUtils = makeDateUtils(this.useUtc);
    var pageTimestamp = constructedDateUtils.setDate(startDate, 1);
    return {
      /*
       * Vue cannot observe changes to a Date Object so date must be stored as a timestamp
       * This represents the first day of the current viewing month
       * {Number}
       */
      pageTimestamp: pageTimestamp,

      /*
       * Selected Date
       * {Date}
       */
      selectedDate: null,

      /*
       * Flags to show calendar views
       * {Boolean}
       */
      showDayView: false,
      showMonthView: false,
      showYearView: false,

      /*
       * Positioning
       */
      calendarHeight: 0,
      resetTypedDate: new Date(),
      utils: constructedDateUtils
    };
  },
  watch: {
    value: function value(_value) {
      this.setValue(_value);
    },
    openDate: function openDate() {
      this.setPageDate();
    },
    initialView: function initialView() {
      this.setInitialView();
    }
  },
  computed: {
    computedInitialView: function computedInitialView() {
      if (!this.initialView) {
        return this.minimumView;
      }

      return this.initialView;
    },
    pageDate: function pageDate() {
      return new Date(this.pageTimestamp);
    },
    translation: function translation() {
      return this.language;
    },
    calendarStyle: function calendarStyle() {
      return {
        position: this.isInline ? 'static' : undefined
      };
    },
    isOpen: function isOpen() {
      return this.showDayView || this.showMonthView || this.showYearView;
    },
    isInline: function isInline() {
      return !!this.inline;
    },
    isRtl: function isRtl() {
      return this.translation.rtl === true;
    }
  },
  methods: {
    /**
     * Called in the event that the user navigates to date pages and
     * closes the picker without selecting a date.
     */
    resetDefaultPageDate: function resetDefaultPageDate() {
      if (this.selectedDate === null) {
        this.setPageDate();
        return;
      }

      this.setPageDate(this.selectedDate);
    },

    /**
     * Effectively a toggle to show/hide the calendar
     * @return {mixed}
     */
    showCalendar: function showCalendar() {
      if (this.disabled || this.isInline) {
        return false;
      }

      if (this.isOpen) {
        return this.close(true);
      }

      this.setInitialView();
    },

    /**
     * Sets the initial picker page view: day, month or year
     */
    setInitialView: function setInitialView() {
      var initialView = this.computedInitialView;

      if (!this.allowedToShowView(initialView)) {
        throw new Error("initialView '".concat(this.initialView, "' cannot be rendered based on minimum '").concat(this.minimumView, "' and maximum '").concat(this.maximumView, "'"));
      }

      switch (initialView) {
        case 'year':
          this.showYearCalendar();
          break;

        case 'month':
          this.showMonthCalendar();
          break;

        default:
          this.showDayCalendar();
          break;
      }
    },

    /**
     * Are we allowed to show a specific picker view?
     * @param {String} view
     * @return {Boolean}
     */
    allowedToShowView: function allowedToShowView(view) {
      var views = ['day', 'month', 'year'];
      var minimumViewIndex = views.indexOf(this.minimumView);
      var maximumViewIndex = views.indexOf(this.maximumView);
      var viewIndex = views.indexOf(view);
      return viewIndex >= minimumViewIndex && viewIndex <= maximumViewIndex;
    },

    /**
     * Show the day picker
     * @return {Boolean}
     */
    showDayCalendar: function showDayCalendar() {
      if (!this.allowedToShowView('day')) {
        return false;
      }

      this.close();
      this.showDayView = true;
      return true;
    },

    /**
     * Show the month picker
     * @return {Boolean}
     */
    showMonthCalendar: function showMonthCalendar() {
      if (!this.allowedToShowView('month')) {
        return false;
      }

      this.close();
      this.showMonthView = true;
      return true;
    },

    /**
     * Show the year picker
     * @return {Boolean}
     */
    showYearCalendar: function showYearCalendar() {
      if (!this.allowedToShowView('year')) {
        return false;
      }

      this.close();
      this.showYearView = true;
      return true;
    },

    /**
     * Set the selected date
     * @param {Number} timestamp
     */
    setDate: function setDate(timestamp) {
      var date = new Date(timestamp);
      this.selectedDate = date;
      this.setPageDate(date);
      this.$emit('selected', date);
      this.$emit('input', date);
    },

    /**
     * Clear the selected date
     */
    clearDate: function clearDate() {
      this.selectedDate = null;
      this.setPageDate();
      this.$emit('selected', null);
      this.$emit('input', null);
      this.$emit('cleared');
    },

    /**
     * @param {Object} date
     */
    selectDate: function selectDate(date) {
      this.setDate(date.timestamp);

      if (!this.isInline) {
        this.close(true);
      }

      this.resetTypedDate = new Date();
    },

    /**
     * @param {Object} date
     */
    selectDisabledDate: function selectDisabledDate(date) {
      this.$emit('selectedDisabled', date);
    },

    /**
     * @param {Object} month
     */
    selectMonth: function selectMonth(month) {
      var date = new Date(month.timestamp);

      if (this.allowedToShowView('day')) {
        this.setPageDate(date);
        this.$emit('changedMonth', month);
        this.showDayCalendar();
      } else {
        this.selectDate(month);
      }
    },

    /**
     * @param {Object} year
     */
    selectYear: function selectYear(year) {
      var date = new Date(year.timestamp);

      if (this.allowedToShowView('month')) {
        this.setPageDate(date);
        this.$emit('changedYear', year);
        this.showMonthCalendar();
      } else {
        this.selectDate(year);
      }
    },

    /**
     * Set the datepicker value
     * @param {Date|String|Number|null} date
     */
    setValue: function setValue(date) {
      if (typeof date === 'string' || typeof date === 'number') {
        var parsed = new Date(date);
        date = isNaN(parsed.valueOf()) ? null : parsed;
      }

      if (!date) {
        this.setPageDate();
        this.selectedDate = null;
        return;
      }

      this.selectedDate = date;
      this.setPageDate(date);
    },

    /**
     * Sets the date that the calendar should open on
     */
    setPageDate: function setPageDate(date) {
      if (!date) {
        if (this.openDate) {
          date = new Date(this.openDate);
        } else {
          date = new Date();
        }
      }

      this.pageTimestamp = this.utils.setDate(new Date(date), 1);
    },

    /**
     * Handles a month change from the day picker
     */
    handleChangedMonthFromDayPicker: function handleChangedMonthFromDayPicker(date) {
      this.setPageDate(date);
      this.$emit('changedMonth', date);
    },

    /**
     * Set the date from a typedDate event
     */
    setTypedDate: function setTypedDate(date) {
      this.setDate(date.getTime());
    },

    /**
     * Close all calendar layers
     * @param {Boolean} emitEvent - emit close event
     */
    close: function close(emitEvent) {
      this.showDayView = this.showMonthView = this.showYearView = false;

      if (!this.isInline) {
        if (emitEvent) {
          this.$emit('closed');
        }

        document.removeEventListener('click', this.clickOutside, false);
      }
    },

    /**
     * Initiate the component
     */
    init: function init() {
      if (this.value) {
        this.setValue(this.value);
      }

      if (this.isInline) {
        this.setInitialView();
      }
    }
  },
  mounted: function mounted() {
    this.init();
  }
} // eslint-disable-next-line
;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "daterangepicker show-ranges openscenter show-calendar" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "drp-calendar" },
        [
          _vm.allowedToShowView("day")
            ? _c(
                "picker-day",
                {
                  attrs: {
                    pageDate: _vm.pageDate,
                    selectedDate: _vm.selectedDate,
                    showDayView: _vm.showDayView,
                    fullMonthName: _vm.fullMonthName,
                    allowedToShowView: _vm.allowedToShowView,
                    disabledDates: _vm.disabledDates,
                    highlighted: _vm.highlighted,
                    calendarClass: _vm.calendarClass,
                    calendarStyle: _vm.calendarStyle,
                    translation: _vm.translation,
                    pageTimestamp: _vm.pageTimestamp,
                    isRtl: _vm.isRtl,
                    mondayFirst: _vm.mondayFirst,
                    dayCellContent: _vm.dayCellContent,
                    "use-utc": _vm.useUtc
                  },
                  on: {
                    changedMonth: _vm.handleChangedMonthFromDayPicker,
                    selectDate: _vm.selectDate,
                    showMonthCalendar: _vm.showMonthCalendar,
                    selectedDisabled: _vm.selectDisabledDate
                  }
                },
                [
                  _vm._t("beforeCalendarHeader", null, {
                    slot: "beforeCalendarHeader"
                  })
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _c("a", { staticClass: "btn", attrs: { href: "#" } }, [
            _vm._v("Next Step")
          ])
        ],
        1
      )
    ]
  )
};
var __vue_staticRenderFns__$4 = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "header" }, [
      _c("div", { staticClass: "header-section" }, [
        _c("strong", [_vm._v("From")]),
        _vm._v(" "),
        _c("span", [_vm._v("Flexible")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "header-section" }, [
        _c("strong", [_vm._v("To")]),
        _vm._v(" "),
        _c("span", [_vm._v("Flexible")])
      ])
    ])
  }
];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = function (inject) {
    if (!inject) return
    inject("data-v-4d991286_0", { source: ".daterangepicker {\n  color: inherit;\n  margin: 0 11px;\n  padding: 0;\n  border-radius: 5px;\n  border: 1px solid #e9ebee;\n  box-shadow: 0 1px 3px 0 rgba(126,131,143,0.06);\n  margin-bottom: 0 !important;\n  font-size: 13px;\n}\n.daterangepicker:before {\n  top: -7px;\n  border-right: 7px solid transparent;\n  border-left: 7px solid transparent;\n  border-bottom: 7px solid #ccc;\n}\n.daterangepicker:after {\n  top: -6px;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #fff;\n  border-left: 6px solid transparent;\n}\n.daterangepicker.opensleft:before {\n  right: 9px;\n}\n.daterangepicker.opensleft:after {\n  right: 10px;\n}\n.daterangepicker.openscenter:before {\n  left: 0;\n  right: 0;\n  width: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n.daterangepicker.openscenter:after {\n  left: 0;\n  right: 0;\n  width: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n.daterangepicker.opensright:before {\n  left: 9px;\n}\n.daterangepicker.opensright:after {\n  left: 10px;\n}\n.daterangepicker.drop-up {\n  margin-top: -7px;\n}\n.daterangepicker.drop-up:before {\n  top: initial;\n  bottom: -7px;\n  border-bottom: initial;\n  border-top: 7px solid #ccc;\n}\n.daterangepicker.drop-up:after {\n  top: initial;\n  bottom: -6px;\n  border-bottom: initial;\n  border-top: 6px solid #fff;\n}\n.daterangepicker.single .daterangepicker .ranges,\n.daterangepicker.single .drp-calendar {\n  float: none;\n}\n.daterangepicker.single .drp-selected {\n  display: none;\n}\n.daterangepicker.show-calendar .drp-calendar {\n  display: block;\n}\n.daterangepicker.show-calendar .drp-buttons {\n  display: block;\n}\n.daterangepicker.auto-apply .drp-buttons {\n  display: none;\n}\n.daterangepicker .drp-calendar.left {\n  padding: 8px 11px 25px 20px;\n}\n.daterangepicker .drp-calendar.right {\n  padding: 8px 10px 25px 12px;\n  float: left;\n}\n.daterangepicker .drp-calendar.single .calendar-table {\n  border: none;\n}\n.calendar-table {\n  margin-bottom: 22px;\n  padding: 0 12px;\n}\n.drp-calendar {\n  text-align: right;\n}\n.drp-calendar .btn {\n  background-image: linear-gradient(-180deg, #fdfefe 0%, #fbfcfc 100%);\n  border: 1px solid #d9dbdf;\n  box-shadow: 0 1px 2px 0 rgba(126,131,143,0.1);\n  display: inline-block;\n  padding: 10px 12px;\n  border-radius: 5px;\n  font-family: 'Open Sans';\n  font-size: 13px;\n  color: #73767d;\n  margin: 0 24px 21px 0;\n}\n.drp-calendar .btn:hover {\n  background: #82a2ff;\n  color: #fff;\n  border-color: #82a2ff;\n}\n.daterangepicker .calendar-table .next span,\n.daterangepicker .calendar-table .prev span {\n  color: #fff;\n  border: solid #b4b7bf;\n  border-width: 0 1px 1px 0;\n  border-radius: 0;\n  display: inline-block;\n  padding: 4px;\n}\n.daterangepicker .calendar-table .next span {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n.daterangepicker .calendar-table .prev span {\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n}\n.daterangepicker .calendar-table th,\n.daterangepicker .calendar-table td {\n  vertical-align: middle;\n  width: 17px;\n  height: 35px;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  cursor: pointer;\n  font-family: 'Open Sans', sans-serif;\n  color: #b4b7bf;\n  text-align: center;\n}\n.available.active.start-date.end-date {\n  vertical-align: middle;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  cursor: pointer;\n  font-family: 'Open Sans', sans-serif;\n  max-width: 0;\n  width: 0;\n  height: auto;\n  background: transparent;\n}\n.available.active.start-date.end-date:hover {\n  background: transparent;\n}\n.available.active.start-date.end-date span {\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  border-radius: 50px;\n  background: #82a2ff;\n  display: inline-block;\n}\n.daterangepicker .calendar-table tbody td,\n.daterangepicker .calendar-table thead td {\n  color: #575a61;\n  text-align: center;\n}\n.daterangepicker .calendar-table tbody td.off,\n.daterangepicker .calendar-table thead td.off {\n  color: #d9dbdf;\n}\n.daterangepicker .calendar-table tbody td.in-range,\n.daterangepicker .calendar-table thead td.in-range,\n.daterangepicker .calendar-table tbody td.start-date,\n.daterangepicker .calendar-table thead td.start-date,\n.daterangepicker .calendar-table tbody td.end-date,\n.daterangepicker .calendar-table thead td.end-date {\n  color: #fff;\n}\n.daterangepicker .calendar-table table {\n  width: 100%;\n  margin: 0;\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.daterangepicker td.available:hover:not(.off):not(.active):not(.in-range) {\n  border-color: transparent;\n  color: #fff;\n  max-width: 0;\n  height: 34px;\n  line-height: 34px;\n}\n.daterangepicker td.available:hover:not(.off):not(.active):not(.in-range) span {\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  border-radius: 50px;\n  background-color: #82a2ff;\n  display: inline-block;\n}\n.daterangepicker th.available:hover {\n  opacity: 0.8;\n}\n.daterangepicker td.week,\n.daterangepicker th.week {\n  font-size: 80%;\n  color: #ccc;\n}\n.daterangepicker td.off,\n.daterangepicker td.off.in-range,\n.daterangepicker td.off.start-date,\n.daterangepicker td.off.end-date {\n  border-color: transparent;\n  background: rgba(245,246,246,0.6);\n  font-size: 13px;\n  color: #d9dbdf !important;\n}\n.daterangepicker td.off:hover,\n.daterangepicker td.off.in-range:hover,\n.daterangepicker td.off.start-date:hover,\n.daterangepicker td.off.end-date:hover {\n  background: rgba(245,246,246,0.6);\n}\n.daterangepicker td.in-range {\n  border-color: transparent;\n  color: #fff;\n  background: #82a2ff;\n  border-radius: 0;\n}\n.daterangepicker td.in-range:not(.off):last-child {\n  border-radius: 0 2px 2px 0;\n}\n.daterangepicker td.in-range:not(.off):first-child {\n  border-radius: 2px 0 0 2px;\n}\n.daterangepicker td.start-date {\n  border-radius: 20px 0 0 20px;\n}\n.daterangepicker td.end-date {\n  border-radius: 0 20px 20px 0;\n}\n.daterangepicker td.start-date.end-date {\n  border-radius: 4px;\n}\n.daterangepicker td.active,\n.daterangepicker td.active:hover {\n  border-color: transparent;\n  color: #fff;\n  background: #82a2ff;\n}\n.daterangepicker th.month {\n  width: auto;\n  font-family: 'Open Sans', sans-serif;\n  padding: 10px 0;\n  font-weight: 600;\n  font-size: 13px;\n  color: #575a61;\n  letter-spacing: 0;\n  text-align: center;\n}\n.daterangepicker th.month,\n.daterangepicker th.prev,\n.daterangepicker th.next {\n  line-height: 1.5;\n  padding: 16px 0 9px;\n}\n.daterangepicker th.prev:hover,\n.daterangepicker th.next:hover {\n  opacity: 0.75;\n}\n.daterangepicker td.disabled,\n.daterangepicker option.disabled {\n  color: #999;\n  cursor: not-allowed;\n  text-decoration: line-through;\n}\n.daterangepicker select.monthselect,\n.daterangepicker select.yearselect {\n  font-size: 12px;\n  padding: 1px;\n  height: auto;\n  margin: 0;\n  cursor: default;\n}\n.daterangepicker select.monthselect {\n  margin-right: 2%;\n  width: 56%;\n}\n.daterangepicker select.yearselect {\n  width: 40%;\n}\n.daterangepicker select.hourselect,\n.daterangepicker select.minuteselect,\n.daterangepicker select.secondselect,\n.daterangepicker select.ampmselect {\n  width: 50px;\n  margin: 0 auto;\n  background: #eee;\n  border: 1px solid #eee;\n  padding: 2px;\n  outline: 0;\n  font-size: 12px;\n}\n.daterangepicker .calendar-time {\n  text-align: center;\n  margin: 4px auto 0 auto;\n  line-height: 30px;\n  position: relative;\n}\n.daterangepicker .calendar-time select.disabled {\n  color: #ccc;\n  cursor: not-allowed;\n}\n.daterangepicker .drp-buttons {\n  clear: both;\n  text-align: right;\n  padding: 8px;\n  border-top: 1px solid #ddd;\n  display: none;\n  line-height: 12px;\n  vertical-align: middle;\n}\n.daterangepicker .drp-selected {\n  display: inline-block;\n  font-size: 12px;\n  padding-right: 8px;\n}\n.daterangepicker .drp-buttons .btn {\n  margin-left: 8px;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 4px 8px;\n}\n.daterangepicker.show-ranges .drp-calendar.left {\n  float: left;\n}\n.daterangepicker .ranges {\n  float: none;\n  text-align: left;\n  margin: 0;\n}\n.daterangepicker.show-calendar .ranges {\n  clear: both;\n  border-top: 1px solid #ced1d8;\n  background: #f7f8fa;\n  padding: 12px 12px 17px;\n}\n.daterangepicker .ranges ul {\n  list-style: none;\n  margin: 0 auto;\n  padding: 0;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.daterangepicker .ranges li {\n  padding: 10px 12px;\n  cursor: pointer;\n  width: 25%;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  color: #5a5c61;\n  text-align: center;\n}\n.daterangepicker .ranges li:hover {\n  background-color: #eee;\n}\n.daterangepicker .ranges li.active {\n  background-color: #08c;\n  color: #fff;\n}\n", map: {"version":3,"sources":["Datepicker.vue"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,cAAc;EACd,UAAU;EACV,kBAAkB;EAClB,yBAAyB;EACzB,8CAA8C;EAC9C,2BAA2B;EAC3B,eAAe;AACjB;AACA;EACE,SAAS;EACT,mCAAmC;EACnC,kCAAkC;EAClC,6BAA6B;AAC/B;AACA;EACE,SAAS;EACT,mCAAmC;EACnC,6BAA6B;EAC7B,kCAAkC;AACpC;AACA;EACE,UAAU;AACZ;AACA;EACE,WAAW;AACb;AACA;EACE,OAAO;EACP,QAAQ;EACR,QAAQ;EACR,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,OAAO;EACP,QAAQ;EACR,QAAQ;EACR,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,SAAS;AACX;AACA;EACE,UAAU;AACZ;AACA;EACE,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,0BAA0B;AAC5B;AACA;EACE,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,0BAA0B;AAC5B;AACA;;EAEE,WAAW;AACb;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;AACf;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,2BAA2B;EAC3B,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,oEAAoE;EACpE,yBAAyB;EACzB,6CAA6C;EAC7C,qBAAqB;EACrB,kBAAkB;EAClB,kBAAkB;EAClB,wBAAwB;EACxB,eAAe;EACf,cAAc;EACd,qBAAqB;AACvB;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,qBAAqB;AACvB;AACA;;EAEE,WAAW;EACX,qBAAqB;EACrB,yBAAyB;EACzB,gBAAgB;EAChB,qBAAqB;EACrB,YAAY;AACd;AACA;EACE,yBAAyB;EACzB,iCAAiC;AACnC;AACA;EACE,yBAAyB;EACzB,iCAAiC;AACnC;AACA;;EAEE,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;EACf,oCAAoC;EACpC,cAAc;EACd,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;EACf,oCAAoC;EACpC,YAAY;EACZ,QAAQ;EACR,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;AACvB;AACA;;EAEE,cAAc;EACd,kBAAkB;AACpB;AACA;;EAEE,cAAc;AAChB;AACA;;;;;;EAME,WAAW;AACb;AACA;EACE,WAAW;EACX,SAAS;EACT,iBAAiB;EACjB,yBAAyB;AAC3B;AACA;EACE,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,yBAAyB;EACzB,qBAAqB;AACvB;AACA;EACE,YAAY;AACd;AACA;;EAEE,cAAc;EACd,WAAW;AACb;AACA;;;;EAIE,yBAAyB;EACzB,iCAAiC;EACjC,eAAe;EACf,yBAAyB;AAC3B;AACA;;;;EAIE,iCAAiC;AACnC;AACA;EACE,yBAAyB;EACzB,WAAW;EACX,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,yBAAyB;EACzB,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,oCAAoC;EACpC,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,kBAAkB;AACpB;AACA;;;EAGE,gBAAgB;EAChB,mBAAmB;AACrB;AACA;;EAEE,aAAa;AACf;AACA;;EAEE,WAAW;EACX,mBAAmB;EACnB,6BAA6B;AAC/B;AACA;;EAEE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,SAAS;EACT,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,UAAU;AACZ;AACA;EACE,UAAU;AACZ;AACA;;;;EAIE,WAAW;EACX,cAAc;EACd,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;EACZ,UAAU;EACV,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,0BAA0B;EAC1B,aAAa;EACb,iBAAiB;EACjB,sBAAsB;AACxB;AACA;EACE,qBAAqB;EACrB,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,SAAS;AACX;AACA;EACE,WAAW;EACX,6BAA6B;EAC7B,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,gBAAgB;EAChB,cAAc;EACd,UAAU;EACV,WAAW;EACX,aAAa;EACb,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,UAAU;EACV,oCAAoC;EACpC,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,kBAAkB;AACpB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;EACtB,WAAW;AACb","file":"Datepicker.vue","sourcesContent":[".daterangepicker {\n  color: inherit;\n  margin: 0 11px;\n  padding: 0;\n  border-radius: 5px;\n  border: 1px solid #e9ebee;\n  box-shadow: 0 1px 3px 0 rgba(126,131,143,0.06);\n  margin-bottom: 0 !important;\n  font-size: 13px;\n}\n.daterangepicker:before {\n  top: -7px;\n  border-right: 7px solid transparent;\n  border-left: 7px solid transparent;\n  border-bottom: 7px solid #ccc;\n}\n.daterangepicker:after {\n  top: -6px;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #fff;\n  border-left: 6px solid transparent;\n}\n.daterangepicker.opensleft:before {\n  right: 9px;\n}\n.daterangepicker.opensleft:after {\n  right: 10px;\n}\n.daterangepicker.openscenter:before {\n  left: 0;\n  right: 0;\n  width: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n.daterangepicker.openscenter:after {\n  left: 0;\n  right: 0;\n  width: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n.daterangepicker.opensright:before {\n  left: 9px;\n}\n.daterangepicker.opensright:after {\n  left: 10px;\n}\n.daterangepicker.drop-up {\n  margin-top: -7px;\n}\n.daterangepicker.drop-up:before {\n  top: initial;\n  bottom: -7px;\n  border-bottom: initial;\n  border-top: 7px solid #ccc;\n}\n.daterangepicker.drop-up:after {\n  top: initial;\n  bottom: -6px;\n  border-bottom: initial;\n  border-top: 6px solid #fff;\n}\n.daterangepicker.single .daterangepicker .ranges,\n.daterangepicker.single .drp-calendar {\n  float: none;\n}\n.daterangepicker.single .drp-selected {\n  display: none;\n}\n.daterangepicker.show-calendar .drp-calendar {\n  display: block;\n}\n.daterangepicker.show-calendar .drp-buttons {\n  display: block;\n}\n.daterangepicker.auto-apply .drp-buttons {\n  display: none;\n}\n.daterangepicker .drp-calendar.left {\n  padding: 8px 11px 25px 20px;\n}\n.daterangepicker .drp-calendar.right {\n  padding: 8px 10px 25px 12px;\n  float: left;\n}\n.daterangepicker .drp-calendar.single .calendar-table {\n  border: none;\n}\n.calendar-table {\n  margin-bottom: 22px;\n  padding: 0 12px;\n}\n.drp-calendar {\n  text-align: right;\n}\n.drp-calendar .btn {\n  background-image: linear-gradient(-180deg, #fdfefe 0%, #fbfcfc 100%);\n  border: 1px solid #d9dbdf;\n  box-shadow: 0 1px 2px 0 rgba(126,131,143,0.1);\n  display: inline-block;\n  padding: 10px 12px;\n  border-radius: 5px;\n  font-family: 'Open Sans';\n  font-size: 13px;\n  color: #73767d;\n  margin: 0 24px 21px 0;\n}\n.drp-calendar .btn:hover {\n  background: #82a2ff;\n  color: #fff;\n  border-color: #82a2ff;\n}\n.daterangepicker .calendar-table .next span,\n.daterangepicker .calendar-table .prev span {\n  color: #fff;\n  border: solid #b4b7bf;\n  border-width: 0 1px 1px 0;\n  border-radius: 0;\n  display: inline-block;\n  padding: 4px;\n}\n.daterangepicker .calendar-table .next span {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n.daterangepicker .calendar-table .prev span {\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n}\n.daterangepicker .calendar-table th,\n.daterangepicker .calendar-table td {\n  vertical-align: middle;\n  width: 17px;\n  height: 35px;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  cursor: pointer;\n  font-family: 'Open Sans', sans-serif;\n  color: #b4b7bf;\n  text-align: center;\n}\n.available.active.start-date.end-date {\n  vertical-align: middle;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  cursor: pointer;\n  font-family: 'Open Sans', sans-serif;\n  max-width: 0;\n  width: 0;\n  height: auto;\n  background: transparent;\n}\n.available.active.start-date.end-date:hover {\n  background: transparent;\n}\n.available.active.start-date.end-date span {\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  border-radius: 50px;\n  background: #82a2ff;\n  display: inline-block;\n}\n.daterangepicker .calendar-table tbody td,\n.daterangepicker .calendar-table thead td {\n  color: #575a61;\n  text-align: center;\n}\n.daterangepicker .calendar-table tbody td.off,\n.daterangepicker .calendar-table thead td.off {\n  color: #d9dbdf;\n}\n.daterangepicker .calendar-table tbody td.in-range,\n.daterangepicker .calendar-table thead td.in-range,\n.daterangepicker .calendar-table tbody td.start-date,\n.daterangepicker .calendar-table thead td.start-date,\n.daterangepicker .calendar-table tbody td.end-date,\n.daterangepicker .calendar-table thead td.end-date {\n  color: #fff;\n}\n.daterangepicker .calendar-table table {\n  width: 100%;\n  margin: 0;\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.daterangepicker td.available:hover:not(.off):not(.active):not(.in-range) {\n  border-color: transparent;\n  color: #fff;\n  max-width: 0;\n  height: 34px;\n  line-height: 34px;\n}\n.daterangepicker td.available:hover:not(.off):not(.active):not(.in-range) span {\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  border-radius: 50px;\n  background-color: #82a2ff;\n  display: inline-block;\n}\n.daterangepicker th.available:hover {\n  opacity: 0.8;\n}\n.daterangepicker td.week,\n.daterangepicker th.week {\n  font-size: 80%;\n  color: #ccc;\n}\n.daterangepicker td.off,\n.daterangepicker td.off.in-range,\n.daterangepicker td.off.start-date,\n.daterangepicker td.off.end-date {\n  border-color: transparent;\n  background: rgba(245,246,246,0.6);\n  font-size: 13px;\n  color: #d9dbdf !important;\n}\n.daterangepicker td.off:hover,\n.daterangepicker td.off.in-range:hover,\n.daterangepicker td.off.start-date:hover,\n.daterangepicker td.off.end-date:hover {\n  background: rgba(245,246,246,0.6);\n}\n.daterangepicker td.in-range {\n  border-color: transparent;\n  color: #fff;\n  background: #82a2ff;\n  border-radius: 0;\n}\n.daterangepicker td.in-range:not(.off):last-child {\n  border-radius: 0 2px 2px 0;\n}\n.daterangepicker td.in-range:not(.off):first-child {\n  border-radius: 2px 0 0 2px;\n}\n.daterangepicker td.start-date {\n  border-radius: 20px 0 0 20px;\n}\n.daterangepicker td.end-date {\n  border-radius: 0 20px 20px 0;\n}\n.daterangepicker td.start-date.end-date {\n  border-radius: 4px;\n}\n.daterangepicker td.active,\n.daterangepicker td.active:hover {\n  border-color: transparent;\n  color: #fff;\n  background: #82a2ff;\n}\n.daterangepicker th.month {\n  width: auto;\n  font-family: 'Open Sans', sans-serif;\n  padding: 10px 0;\n  font-weight: 600;\n  font-size: 13px;\n  color: #575a61;\n  letter-spacing: 0;\n  text-align: center;\n}\n.daterangepicker th.month,\n.daterangepicker th.prev,\n.daterangepicker th.next {\n  line-height: 1.5;\n  padding: 16px 0 9px;\n}\n.daterangepicker th.prev:hover,\n.daterangepicker th.next:hover {\n  opacity: 0.75;\n}\n.daterangepicker td.disabled,\n.daterangepicker option.disabled {\n  color: #999;\n  cursor: not-allowed;\n  text-decoration: line-through;\n}\n.daterangepicker select.monthselect,\n.daterangepicker select.yearselect {\n  font-size: 12px;\n  padding: 1px;\n  height: auto;\n  margin: 0;\n  cursor: default;\n}\n.daterangepicker select.monthselect {\n  margin-right: 2%;\n  width: 56%;\n}\n.daterangepicker select.yearselect {\n  width: 40%;\n}\n.daterangepicker select.hourselect,\n.daterangepicker select.minuteselect,\n.daterangepicker select.secondselect,\n.daterangepicker select.ampmselect {\n  width: 50px;\n  margin: 0 auto;\n  background: #eee;\n  border: 1px solid #eee;\n  padding: 2px;\n  outline: 0;\n  font-size: 12px;\n}\n.daterangepicker .calendar-time {\n  text-align: center;\n  margin: 4px auto 0 auto;\n  line-height: 30px;\n  position: relative;\n}\n.daterangepicker .calendar-time select.disabled {\n  color: #ccc;\n  cursor: not-allowed;\n}\n.daterangepicker .drp-buttons {\n  clear: both;\n  text-align: right;\n  padding: 8px;\n  border-top: 1px solid #ddd;\n  display: none;\n  line-height: 12px;\n  vertical-align: middle;\n}\n.daterangepicker .drp-selected {\n  display: inline-block;\n  font-size: 12px;\n  padding-right: 8px;\n}\n.daterangepicker .drp-buttons .btn {\n  margin-left: 8px;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 4px 8px;\n}\n.daterangepicker.show-ranges .drp-calendar.left {\n  float: left;\n}\n.daterangepicker .ranges {\n  float: none;\n  text-align: left;\n  margin: 0;\n}\n.daterangepicker.show-calendar .ranges {\n  clear: both;\n  border-top: 1px solid #ced1d8;\n  background: #f7f8fa;\n  padding: 12px 12px 17px;\n}\n.daterangepicker .ranges ul {\n  list-style: none;\n  margin: 0 auto;\n  padding: 0;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.daterangepicker .ranges li {\n  padding: 10px 12px;\n  cursor: pointer;\n  width: 25%;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  color: #5a5c61;\n  text-align: center;\n}\n.daterangepicker .ranges li:hover {\n  background-color: #eee;\n}\n.daterangepicker .ranges li.active {\n  background-color: #08c;\n  color: #fff;\n}\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject SSR */
  

  
  var Datepicker = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    browser,
    undefined
  );

module.exports = Datepicker;
