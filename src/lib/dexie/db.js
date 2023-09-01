import Dexie from 'dexie';
const db = new Dexie('whDatabase');

db.version(1).stores({
	//매장에서 식사 or 포장하기
	prevCategory: 'id++,category',
	//상세화면 상품
	selectedItem: 'id++, GOODS_CD, GOODS_NM, UPRICE, SALE_QTY, SALE_TOT, SALE_AMT, DC_AMT, STOCK_FG, SUB_MENU_CD, SUB_MENU_NM, PAR_GOODS_CD, PACK_YN, IMG_URL',	
	// 카트리스트 디테일
	cartList: 'id++, CNT, GOODS_CD, GOODS_NM, UPRICE, SALE_QTY, SALE_TOT, SALE_AMT, DC_AMT, STOCK_FG, SUB_MENU_CD, SUB_MENU_NM, PAR_GOODS_CD, PACK_YN, IMG_URL, SUB_MENU_PRICE_NM',

	/**
	 * [RESTAPI]
	 */
	// 매장정보
	storeInformation:'id++, MS_NM, MS_NO, CHAIN_NO, CHAIN_AREA, CHAIN_HQ_YN',
	
	// 부가메뉴
	submenuList:'id++, SUB_GROUP_CD, SUB_MENU_CD, SUB_MENU_NM, DISPLAY_ORDER, STOCK_FG, GOODS_CD, UPCHARGE_UPRICE, CREATE_FG',	
	
	//상품 상세 정보
	detailList: 'id++, GPLU_CD, PLU_CD, GOODS_CD, SEQ, SUB_GROUP_CD, SUB_GROUP_NM, SUB_FG, SUB_GROUP_QTY, SUB_GROUP_GUIDE, STOCK_FG, UPCHARGE_UPRICE',

	// 상품 기본 정보(기존과 조인)
	itemList: 'id++, GPLU_CD, PLU_CD, GOODS_CD, GOODS_NM, UPRICE, IMG_PATH, IMG_FILE_NM, NEW_YN, HIT_YN, PACK_YN, SHOP_YN, DETAIL_YN',

	// 웹 키오스크 카테고리
	categoryList: '++id, GPLU_CD, GPLU_NM'
});


export default db