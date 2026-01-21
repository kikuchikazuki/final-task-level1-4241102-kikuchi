"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const sortButtons = document.querySelectorAll('[data-sort]');

    // ページ判定: data-sort の値で判断
    const firstButton = sortButtons[0];
    const isPageA = firstButton.dataset.sort === 'new'; // Aページは最初のボタンが new
    const isPageB = firstButton.dataset.sort === 'popular'; // Bページは最初のボタンが popular

    // 各要素の取得（存在しない場合は null）
    const contentDisplay = document.getElementById('contentDisplay');
    const contentPreparing = document.getElementById('contentPreparing');
    const pagination = document.getElementById('pagination');
    const cases = document.getElementById('cases');

    sortButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // active クラスの付け替え
            sortButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const sortType = btn.dataset.sort;
            let showContent = false;

            // ページごとの表示条件
            if (isPageA && sortType === 'new') {
                showContent = true;
            } else if (isPageB && sortType === 'popular') {
                showContent = true;
            }

            if (showContent) {
                // 本物コンテンツを表示
                if (contentDisplay) contentDisplay.classList.remove('d-none');
                if (pagination) pagination.classList.remove('d-none');
                if (cases) cases.classList.remove('d-none');
                if (contentPreparing) contentPreparing.classList.add('d-none');
            } else {
                // 準備中表示
                if (contentDisplay) contentDisplay.classList.add('d-none');
                if (pagination) pagination.classList.add('d-none');
                if (cases) cases.classList.add('d-none');
                if (contentPreparing) contentPreparing.classList.remove('d-none');

                const preparingMessage = document.getElementById('preparingMessage');
                if (preparingMessage) {
                    preparingMessage.textContent = `${btn.textContent.trim()} のコンテンツは準備中です。`;
                }
            }
        });
    });
});