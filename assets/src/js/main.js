/* =====================================================================
 * MAIN JS
 * =====================================================================
 * 1. Open modal
 * ===================================================================*/

(function () {
  'use strict';

  /* ---------------------------------------------------------------------
   * 1. Open modal
   * -------------------------------------------------------------------*/

  const btn = document.querySelector('.trigger-lightbox');
  btn.addEventListener('click', () => new lightbox('#modal'));

}());