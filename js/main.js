$(function() {
	var aTopinfo = $('.top-info');
	var aArrow = aTopinfo.find('img');
	var aItems = $('.items');
	var oTakephoto = $('.take-photo');
	var oPhotops = $('#photo-ps');
	var oCancel = oPhotops.find('.cancel');
	var i = 0;
	for(i=0;i<aTopinfo.length;i++){
		aTopinfo[i].index = i;
		aTopinfo[i].onclick = function(){
			// alert(this.index);
			var a = this.index;
			// alert(a);
			if(aItems[a].style.display == 'block'){
				aItems[a].style.display = 'none';
				aArrow[a].className = 'arrow';
			}else{
				aItems[a].style.display = 'block';
				aArrow[a].className = 'arrow-click';
			}
		}
	};
	for(i=0;i<oTakephoto.length;i++){
		oTakephoto[i].onclick = function(){
			oPhotops.show();
			oCancel[0].onclick = function(){
				oPhotops.hide();
			}
		}
	}
});
