
export const Assets={
  cache:{},
  async load(name, src){
    if(this.cache[name]) return this.cache[name];
    return new Promise(res=>{
      let img=new Image();
      img.onload=()=>{this.cache[name]=img; res(img);};
      img.onerror=()=>{console.log('fallo '+src); res(null);};
      img.src=src;
    });
  },
  async loadEssential(){
    // Tu arte original, no el inventado
    await this.load('slime','slime_natural.png');
    await this.load('archer','arquero_indio.png');
    console.log('Arte original cargado');
  },
  async loadExtras(){
    if('requestIdleCallback' in window){
      requestIdleCallback(async()=>{
        await this.load('exp','exp.png');
      });
    }
  }
};
