var documenterSearchIndex = {"docs":
[{"location":"green/#Green-Tensors","page":"Green tensors","title":"Green Tensors","text":"","category":"section"},{"location":"green/","page":"Green tensors","title":"Green tensors","text":"This module is aimed to compute the electric and magnetic green tensors for the two system of units.","category":"page"},{"location":"green/#Module-Features","page":"Green tensors","title":"Module Features","text":"","category":"section"},{"location":"green/","page":"Green tensors","title":"Green tensors","text":"Computes the electric/magnetic green tensor.\nComputes the electric/magnetic green tensor for renormalized units.\nCompute the big electric and magnetic green tensor.\nCompute the big electric and magnetic for renormalized units.\nCompute the derivatives of the electric/magnetic/big green tensor.","category":"page"},{"location":"green/#Function-Documentation","page":"Green tensors","title":"Function Documentation","text":"","category":"section"},{"location":"green/","page":"Green tensors","title":"Green tensors","text":"green_tensor_e_m.G_e","category":"page"},{"location":"green/#Main.green_tensor_e_m.G_e","page":"Green tensors","title":"Main.green_tensor_e_m.G_e","text":"G_e(r1,r2,knorm)\n\nCompute the electric green tensor between two position  r1 and r2 with wavenumber knorm. The output isd a 3x3 complex matrix. The electric green tensor is defined as:\n\ntildeG_eleft(vecr_1vecr_2kright)=frace^ikr4 pi rkleft(frac(kr)^2+ikr-1(kr)^2I+frac-(kr)^2-3ikr+3(kr)^2vecu_rvecu_rright)\n\nwith\n\nr=r_1-r_2 vecu_r=left(r_1-r_2right)r\n\n\n\n\n\n","category":"function"},{"location":"green/","page":"Green tensors","title":"Green tensors","text":"green_tensor_e_m.dxG_e","category":"page"},{"location":"green/#Main.green_tensor_e_m.dxG_e","page":"Green tensors","title":"Main.green_tensor_e_m.dxG_e","text":"dxG_e(r1,r2,knorm)\n\nCompute the derivative magnetic green tensor regarding the x component of r1 between two position  r1 and r2 with wavenumber knorm. The output isd a 3x3 complex matrix\n\n\n\n\n\n","category":"function"},{"location":"green/","page":"Green tensors","title":"Green tensors","text":"green_tensor_e_m.dyG_e","category":"page"},{"location":"green/#Main.green_tensor_e_m.dyG_e","page":"Green tensors","title":"Main.green_tensor_e_m.dyG_e","text":"dyG_e(r1,r2,knorm)\n\nCompute the derivative magnetic green tensor regarding the y component of r1 between two position  r1 and r2 with wavenumber knorm. The output isd a 3x3 complex matrix\n\n\n\n\n\n","category":"function"},{"location":"green/","page":"Green tensors","title":"Green tensors","text":"green_tensor_e_m.dzG_e","category":"page"},{"location":"green/#Main.green_tensor_e_m.dzG_e","page":"Green tensors","title":"Main.green_tensor_e_m.dzG_e","text":"dzG_e(r1,r2,knorm)\n\nCompute the derivative magnetic green tensor regarding the z component of r1 between two position  r1 and r2 with wavenumber knorm. The output isd a 3x3 complex matrix\n\n\n\n\n\n","category":"function"},{"location":"green/","page":"Green tensors","title":"Green tensors","text":"green_tensor_e_m.G_m","category":"page"},{"location":"green/#Main.green_tensor_e_m.G_m","page":"Green tensors","title":"Main.green_tensor_e_m.G_m","text":"G_m(r1,r2,knorm)\n\nCompute the magnetic green tensor between two position  r1 and r2 with wavenumber knorm. The output isd a 3x3 complex matrix. The magnetic green tensor is defined as:\n\ntildeG_mleft(vecr_1vecr_2kright)=frace^ikr4 pi rkleft(fracikr-1ikrright)vecu_r\n\nwith\n\nr=r_1-r_2 vecu_r=left(r_1-r_2right)r\n\n\n\n\n\n","category":"function"},{"location":"green/","page":"Green tensors","title":"Green tensors","text":"green_tensor_e_m.dxG_m","category":"page"},{"location":"green/#Main.green_tensor_e_m.dxG_m","page":"Green tensors","title":"Main.green_tensor_e_m.dxG_m","text":"dxG_m(r1,r2,knorm)\n\nCompute the derivative magnetic green tensor regarding the x component of r1 between two position  r1 and r2 with wavenumber knorm. The output isd a 3x3 complex matrix\n\n\n\n\n\n","category":"function"},{"location":"green/","page":"Green tensors","title":"Green tensors","text":"green_tensor_e_m.dyG_m","category":"page"},{"location":"green/#Main.green_tensor_e_m.dyG_m","page":"Green tensors","title":"Main.green_tensor_e_m.dyG_m","text":"dyG_m(r1,r2,knorm)\n\nCompute the derivative magnetic green tensor regarding the y component of r1 between two position  r1 and r2 with wavenumber knorm. The output isd a 3x3 complex matrix\n\n\n\n\n\n","category":"function"},{"location":"green/","page":"Green tensors","title":"Green tensors","text":"green_tensor_e_m.dzG_m","category":"page"},{"location":"green/#Main.green_tensor_e_m.dzG_m","page":"Green tensors","title":"Main.green_tensor_e_m.dzG_m","text":"dzG_m(r1,r2,knorm)\n\nCompute the derivative magnetic green tensor regarding the z component of r1 between two position  r1 and r2 with wavenumber knorm. The output isd a 3x3 complex matrix\n\n\n\n\n\n","category":"function"},{"location":"green/","page":"Green tensors","title":"Green tensors","text":"green_tensor_e_m.G_e_renorm","category":"page"},{"location":"green/#Main.green_tensor_e_m.G_e_renorm","page":"Green tensors","title":"Main.green_tensor_e_m.G_e_renorm","text":"G_e_renorm(kr1,kr2)\n\nCompute the electric green tensor in renormalized units (see Home page) between two position multiplied by the wave number kr1 and kr2 (->dimensionless input). The output is a 3x3 complex matrix. The renormalized electric green tensor is defined as:\n\nG_e=frac4*pik^2tildeG_e\n\n\n\n\n\n","category":"function"},{"location":"green/","page":"Green tensors","title":"Green tensors","text":"green_tensor_e_m.G_m_renorm","category":"page"},{"location":"green/#Main.green_tensor_e_m.G_m_renorm","page":"Green tensors","title":"Main.green_tensor_e_m.G_m_renorm","text":"G_m_renorm(kr1,kr2)\n\nCompute the magnetic green tensor in renormalized units (see Home page) between two position multiplied by the wave number kr1 and kr2 (->dimensionless input). The output isd a 3x3 complex matrix. The renormalized magnetic green tensor is defined as:\n\nG_m=frac4*piktildeG_m\n\n\n\n\n\n","category":"function"},{"location":"green/","page":"Green tensors","title":"Green tensors","text":"green_tensor_e_m.G_e_m","category":"page"},{"location":"green/#Main.green_tensor_e_m.G_e_m","page":"Green tensors","title":"Main.green_tensor_e_m.G_e_m","text":"G_e_m(r1,r2,knorm)\n\nCompute the big electric and magnetic green tensor between two position  r1 and r2 with wavenumber knorm. The output is a 6x6 complex matrix. The big electric and magnetic green tensor is defined as:\n\n tildeG_em=left(beginmatrix\n tildeG_e   tildeG_m\n tildeG_m   tildeG_e\nendmatrixright)\n\n\n\n\n\n","category":"function"},{"location":"green/","page":"Green tensors","title":"Green tensors","text":"green_tensor_e_m.G_e_m_renorm","category":"page"},{"location":"green/#Main.green_tensor_e_m.G_e_m_renorm","page":"Green tensors","title":"Main.green_tensor_e_m.G_e_m_renorm","text":"G_e_m_renorm(r1,r2,knorm)\n\nCompute the big electric and magnetic green tensor in renormalized units (see Home page) between two position  r1 and r2 with wavenumber knorm. The output is a 6x6 complex matrix. The big electric and magnetic green tensor in renormalized units is defined as:\n\n G_em=left(beginmatrix\n G_e   G_m\n G_m   G_e\nendmatrixright)\n\n\n\n\n\n","category":"function"},{"location":"green/","page":"Green tensors","title":"Green tensors","text":"green_tensor_e_m.dxG_e_m","category":"page"},{"location":"green/#Main.green_tensor_e_m.dxG_e_m","page":"Green tensors","title":"Main.green_tensor_e_m.dxG_e_m","text":"dxG_e_m(r1,r2,knorm)\n\nCompute the derivative of the big electric and magnetic green tensor regarding the x component of r1 between two position  r1 and r2 with wavenumber knorm. The output isd a 6x6 complex matrix\n\n\n\n\n\n","category":"function"},{"location":"green/","page":"Green tensors","title":"Green tensors","text":"green_tensor_e_m.dyG_e_m","category":"page"},{"location":"green/#Main.green_tensor_e_m.dyG_e_m","page":"Green tensors","title":"Main.green_tensor_e_m.dyG_e_m","text":"dyG_e_m(r1,r2,knorm)\n\nCompute the derivative of the big electric and magnetic green tensor regarding the y component of r1 between two position  r1 and r2 with wavenumber knorm. The output isd a 6x6 complex matrix\n\n\n\n\n\n","category":"function"},{"location":"green/","page":"Green tensors","title":"Green tensors","text":"green_tensor_e_m.dzG_e_m","category":"page"},{"location":"green/#Main.green_tensor_e_m.dzG_e_m","page":"Green tensors","title":"Main.green_tensor_e_m.dzG_e_m","text":"dzG_e_m(r1,r2,knorm)\n\nCompute the derivative of the big electric and magnetic green tensor regarding the z component of r1 between two position  r1 and r2 with wavenumber knorm. The output isd a 6x6 complex matrix\n\n\n\n\n\n","category":"function"},{"location":"input_fields/#Input-Fields","page":"Input fields","title":"Input Fields","text":"","category":"section"},{"location":"input_fields/","page":"Input fields","title":"Input fields","text":"This module is aimed to compute the electric and magnetic green tensors for the two system of units.","category":"page"},{"location":"input_fields/#Module-Features","page":"Input fields","title":"Module Features","text":"","category":"section"},{"location":"input_fields/","page":"Input fields","title":"Input fields","text":"Computes the electric/magnetic green tensor.\nComputes the electric/magnetic green tensor for renormalized units.\nCompute the big electric and magnetic green tensor.\nCompute the big electric and magnetic for renormalized units.\nCompute the derivatives of the electric/magnetic/big green tensor.","category":"page"},{"location":"input_fields/#Function-Documentation","page":"Input fields","title":"Function Documentation","text":"","category":"section"},{"location":"input_fields/","page":"Input fields","title":"Input fields","text":"input_fields.plane_wave","category":"page"},{"location":"input_fields/#Main.input_fields.plane_wave","page":"Input fields","title":"Main.input_fields.plane_wave","text":"plane_wave(knorm,r,khat=[0,0,1],e0=[1,0,0])\n\nComputes a simple plane wave of wavenumber knorm evaluated at position r function. khat is the direction of propagation and e0 is the polarization. The output is a 3d complex vector. This plane wave is defined as:\n\nmathbfEleft(mathbfrright)=mathbfE_0e^imathbfkcdotmathbfr\n\n\n\n\n\n","category":"function"},{"location":"#DDAjulia","page":"Home","title":"DDAjulia","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The aim of this code is to provide a quick and easy to use DDA implementation of electric or electric and magnetic dipoles. This code run in parrallel (for some parts) and the GPu acceleration is on process.","category":"page"},{"location":"#Sub-Modules","page":"Home","title":"Sub-Modules","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"DDA: core funxtionalities of the DDA\nGreenTensors: to compute the electric and magnetic or both green tensors.\nAlpha: to compute the polarizabilities.\nGeometries: to discretize some 3d objects or to generate some 3D random structures.\nMieCoeff: everythiong that has to do with Mie theory","category":"page"},{"location":"#Units","page":"Home","title":"Units","text":"","category":"section"},{"location":"#Example","page":"Home","title":"Example","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The code is know provided with two example:","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"}]
}
