describe('Create a product ', function () {
    // test case
    it('Sucessfull', () => {
      
      cy.visit("http://192.168.100.198:8020/");
         
      cy.get('[name="username"]').should('be.visible').click().type('0971548787');
      cy.get('[name="password"]').should('be.visible').click().type('123456');
      cy.get('.btn-login').click();
      cy.wait(500);
      // cy.get ('.error-message').should('be.empty');
      cy.get('span.mdi.mdi-menu').eq(0).click({force: true});
      cy.contains('Quản lý sản phẩm').click({force: true});
      cy.contains('Danh sách').click({force: true});
      //CREATE a product
      cy.get('button').contains('Thêm mới').click({force: true});
      // insert information
      cy.get('input[name="productCode"]').click({force: true}).type('MOON012112');
      cy.get('input[name="productName"]').click({force: true}).type('MOON01');
      cy.get('input[name="taxRate"]').click({force: true}).type('10');
      cy.get('input[name="unitName"]').click({force: true}).type('MOON01');
      cy.get('#idService').click({force: true}).type('Food {enter}');
      cy.get('button[type="submit"]').contains('Thêm mới').click({force: true});
      cy.get('.Toastify').should('be.text','Giao dịch thành công')
    });
    it('Duplicate product code', () => {
      
      cy.visit("http://192.168.100.198:8020/");
         
      cy.get('[name="username"]').should('be.visible').click().type('0971548787');
      cy.get('[name="password"]').should('be.visible').click().type('123456');
      cy.get('.btn-login').click();
     
      // cy.get ('.error-message').should('be.empty');
      cy.get('span.mdi.mdi-menu').eq(0).click({force: true});
      cy.contains('Quản lý sản phẩm').click({force: true});
      cy.contains('Danh sách').click({force: true});
      //CREATE a product
      cy.get('button').contains('Thêm mới').click({force: true});
      // insert information
      cy.get('input[name="productCode"]').click({force: true}).type('MOON011');
      cy.get('input[name="productName"]').click({force: true}).type('MOON01');
      cy.get('input[name="taxRate"]').click({force: true}).type('10');
      cy.get('input[name="unitName"]').click({force: true}).type('MOON01');
      cy.get('#idService').click().type('Food {enter}');
      cy.get('button[type="submit"]').contains('Thêm mới').click({force: true});
      cy.wait(500);
      cy.get('.Toastify').should('be.text','Mã sản phẩm đã tồn tại')
    });

    it('NULL product code', () => {
      
      cy.visit("http://192.168.100.198:8020/");
         
      cy.get('[name="username"]').should('be.visible').click().type('0971548787');
      cy.get('[name="password"]').should('be.visible').click().type('123456');
      cy.get('.btn-login').click();
   
      // cy.get ('.error-message').should('be.empty');
      cy.get('span.mdi.mdi-menu').eq(0).click({force: true});
      cy.contains('Quản lý sản phẩm').click({force: true});
      cy.contains('Danh sách').click({force: true});
      //CREATE a product
      cy.get('button').contains('Thêm mới').click({force: true});
      // insert information
      // cy.get('input[name="productCode"]').click().type('MOON011');
      cy.get('input[name="productName"]').click({force: true}).type('MOON01');
      cy.get('input[name="taxRate"]').click({force: true}).type('10');
      cy.get('input[name="unitName"]').click({force: true}).type('MOON01');
      cy.get('#idService').click().type('Food {enter}');
      cy.get('button[type="submit"]').contains('Thêm mới').click({force: true});
      cy.wait(500);
      cy.get('.error_text').should('be.text','Mã sản phẩm không được để trống')
    });
    it('NULL- Product name', () => {
      
      cy.visit("http://192.168.100.198:8020/");
         
      cy.get('[name="username"]').should('be.visible').click().type('0971548787');
      cy.get('[name="password"]').should('be.visible').click().type('123456');
      cy.get('.btn-login').click();
 
      // cy.get ('.error-message').should('be.empty');
      cy.get('span.mdi.mdi-menu').eq(0).click({force: true});
      cy.contains('Quản lý sản phẩm').click({force: true});
      cy.contains('Danh sách').click({force: true});
      //CREATE a product
      cy.get('button').contains('Thêm mới').click({force: true});
      // insert information
      cy.get('input[name="productCode"]').click({force: true}).type('MOON011');
      // cy.get('input[name="productName"]').click().type('MOON01');
      cy.get('input[name="taxRate"]').click({force: true}).type('10');
      cy.get('input[name="unitName"]').click({force: true}).type('MOON01');
      cy.get('#idService').click().type('Food {enter}');
      cy.get('button[type="submit"]').contains('Thêm mới').click({force: true});
      cy.wait(500);
      cy.get('.error_text').should('be.text','Tên sản phẩm không được để trống')

    });
    it('NULL- Tax rate', () => {
      
      cy.visit("http://192.168.100.198:8020/");
         
      cy.get('[name="username"]').should('be.visible').click().type('0971548787');
      cy.get('[name="password"]').should('be.visible').click().type('123456');
      cy.get('.btn-login').click();
      
      // cy.get ('.error-message').should('be.empty');
      cy.get('span.mdi.mdi-menu').eq(0).click({force: true});
      cy.contains('Quản lý sản phẩm').click({force: true});
      cy.contains('Danh sách').click({force: true});
      //CREATE a product
      cy.get('button').contains('Thêm mới').click({force: true});
      // insert information
      cy.get('input[name="productCode"]').click({force: true}).type('MOON011');
      cy.get('input[name="productName"]').click({force: true}).type('MOON01');
      // cy.get('input[name="taxRate"]').click().type('10%');
      cy.get('input[name="unitName"]').click({force: true}).type('MOON01');
      cy.get('#idService').click().type('Food {enter}');
      cy.get('button[type="submit"]').contains('Thêm mới').click({force: true});
      cy.wait(500);
      cy.get('.error_text').should('be.text','Vui lòng nhập mã thuế suất là dạng số')

    });
    it('NULL- idService', () => {
      
      cy.visit("http://192.168.100.198:8020/");
         
      cy.get('[name="username"]').should('be.visible').click().type('0971548787');
      cy.get('[name="password"]').should('be.visible').click().type('123456');
      cy.get('.btn-login').click();
      
      // cy.get ('.error-message').should('be.empty');
      cy.get('span.mdi.mdi-menu').eq(0).click({force: true});
      cy.contains('Quản lý sản phẩm').click({force: true});
      cy.contains('Danh sách').click({force: true});
      //CREATE a product
      cy.get('button').contains('Thêm mới').click({force: true});
      // insert information
      cy.get('input[name="productCode"]').click({force: true}).type('MOON011');
      cy.get('input[name="productName"]').click({force: true}).type('MOON01');
      cy.get('input[name="taxRate"]').click({force: true}).type('10');
      cy.get('input[name="unitName"]').click({force: true}).type('MOON01');
      // cy.get('#idService').click().type('Food {enter}');
      cy.get('button[type="submit"]').contains('Thêm mới').click({force: true});
      cy.wait(1000);
      cy.get('.error_text').should('be.text','Loại dịch vụ không được để trống')

    });
    it('Check only type number in tax rate ', () => {
      
      cy.visit("http://192.168.100.198:8020/");
         
      cy.get('[name="username"]').should('be.visible').click().type('0971548787');
      cy.get('[name="password"]').should('be.visible').click().type('123456');
      cy.get('.btn-login').click();
      
      // cy.get ('.error-message').should('be.empty');
      cy.get('span.mdi.mdi-menu').eq(0).click({force: true});
      cy.contains('Quản lý sản phẩm').click({force: true});
      cy.contains('Danh sách').click({force: true});
      //CREATE a product
      cy.get('button').contains('Thêm mới').click({force: true});
      // insert information
      cy.get('input[name="productCode"]').click({force: true}).type('MOON01121111');
      cy.get('input[name="productName"]').click({force: true}).type('MOON01');
      cy.get('input[name="taxRate"]').click({force: true}).type('abc10').should('have.value', '10');
      cy.get('input[name="unitName"]').click({force: true}).type('MOON01');
      cy.get('#idService').click().type('Food {enter}');
      cy.get('button[type="submit"]').contains('Thêm mới').click({force: true});
      cy.wait(1000);
     

    });
    it('Check invalid tax rate', () => {
      
      cy.visit("http://192.168.100.198:8020/");
         
      cy.get('[name="username"]').should('be.visible').click().type('0971548787');
      cy.get('[name="password"]').should('be.visible').click().type('123456');
      cy.get('.btn-login').click();
      
      // cy.get ('.error-message').should('be.empty');
      cy.get('span.mdi.mdi-menu').eq(0).click({force: true});
      cy.contains('Quản lý sản phẩm').click({force: true});
      cy.contains('Danh sách').click({force: true});
      //CREATE a product
      cy.get('button').contains('Thêm mới').click({force: true});
      // insert information
      cy.get('input[name="productCode"]').click({force: true}).type('MOON011Moon');
      cy.get('input[name="productName"]').click({force: true}).type('MOON01');
      cy.get('input[name="taxRate"]').click({force: true}).type('12');
      cy.get('input[name="unitName"]').click({force: true}).type('MOON01');
      cy.get('#idService').click().type('Food {enter}');
      cy.get('button[type="submit"]').contains('Thêm mới').click({force: true});
      cy.wait(1000);
      cy.get('.Toastify').should('be.text','Thuế suất không hợp lệ')

    });

 });