describe('Update a product', () => {
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

        //Update product
        cy.get('a[href="sua-san-pham/4487"]').click({force: true});
        cy.get('input[name="productCode"]').should('be.disabled').and('be.value','MOON0121121');
        cy.get('input[name="productName"]').should('be.value','MOON012').click({force: true}).clear().type('MOON012');
        cy.get('input[name="taxRate"]').should('be.value','10').click({force: true}).clear().type('10');
        cy.get('input[name="unitName"]').should('be.value','Cái').click({force: true}).clear().type('Cái');

        cy.get('input[name="idService"]').should('be.disabled').and('be.value','Food');
        cy.get('button[type="submit"]').contains('Chỉnh sửa').click({force: true});
        cy.get('.Toastify').should('be.text','Giao dịch thành công')
    });
    it('NULL - Product name', () => {
        cy.visit("http://192.168.100.198:8020/");
         
        cy.get('[name="username"]').should('be.visible').click().type('0971548787');
        cy.get('[name="password"]').should('be.visible').click().type('123456');
        cy.get('.btn-login').click();
        cy.wait(500);
        // cy.get ('.error-message').should('be.empty');
        cy.get('span.mdi.mdi-menu').eq(0).click({force: true});
        cy.contains('Quản lý sản phẩm').click({force: true});
        cy.contains('Danh sách').click({force: true});

        //Update product
        cy.get('a[href="sua-san-pham/4487"]').click({force: true});
        cy.get('input[name="productCode"]').should('be.disabled').and('be.value','MOON0121121');
        cy.get('input[name="productName"]').should('be.value','MOON012').click({force: true}).clear();
        cy.get('input[name="taxRate"]').should('be.value','10').click({force: true}).clear().type('10');
        cy.get('input[name="unitName"]').should('be.value','Cái').click({force: true}).clear().type('Cái');

        cy.get('input[name="idService"]').should('be.disabled').and('be.value','Food');
        cy.get('button[type="submit"]').contains('Chỉnh sửa').click({force: true});
        cy.get('.error_text').should('be.text','Tên sản phẩm không được để trống')

    });
    it('NULL - Tax rate', () => {
        cy.visit("http://192.168.100.198:8020/");
         
        cy.get('[name="username"]').should('be.visible').click().type('0971548787');
        cy.get('[name="password"]').should('be.visible').click().type('123456');
        cy.get('.btn-login').click();
        cy.wait(500);
        // cy.get ('.error-message').should('be.empty');
        cy.get('span.mdi.mdi-menu').eq(0).click({force: true});
        cy.contains('Quản lý sản phẩm').click({force: true});
        cy.contains('Danh sách').click({force: true});

        //Update product
        cy.get('a[href="sua-san-pham/4487"]').click({force: true});
        cy.get('input[name="productCode"]').should('be.disabled').and('be.value','MOON0121121');
        cy.get('input[name="productName"]').should('be.value','MOON012').click({force: true}).clear().type('MOON012');
        cy.get('input[name="taxRate"]').should('be.value','10').click({force: true}).clear();
        cy.get('input[name="unitName"]').should('be.value','Cái').click({force: true}).clear().type('Cái');

        cy.get('input[name="idService"]').should('be.disabled').and('be.value','Food');
        cy.get('button[type="submit"]').contains('Chỉnh sửa').click({force: true});
        cy.get('.error_text').should('be.text','Vui lòng nhập mã thuế suất là dạng số')

    });
    it('Check number in tax rate', () => {
        cy.visit("http://192.168.100.198:8020/");
         
        cy.get('[name="username"]').should('be.visible').click().type('0971548787');
        cy.get('[name="password"]').should('be.visible').click().type('123456');
        cy.get('.btn-login').click();
        cy.wait(500);
        // cy.get ('.error-message').should('be.empty');
        cy.get('span.mdi.mdi-menu').eq(0).click({force: true});
        cy.contains('Quản lý sản phẩm').click({force: true});
        cy.contains('Danh sách').click({force: true});

        //Update product
        cy.get('a[href="sua-san-pham/4487"]').click({force: true});
        cy.get('input[name="productCode"]').should('be.disabled').and('be.value','MOON0121121');
        cy.get('input[name="productName"]').should('be.value','MOON012').click({force: true}).clear().type('MOON012');
        cy.get('input[name="taxRate"]').should('be.value','10').click({force: true}).clear().type('abc10').should('have.value', '10');
        cy.get('input[name="unitName"]').should('be.value','Cái').click({force: true}).clear().type('Cái');

        cy.get('input[name="idService"]').should('be.disabled').and('be.value','Food');
        cy.get('button[type="submit"]').contains('Chỉnh sửa').click({force: true});
    });
    it('Check invalid tax rate', () => {
        cy.visit("http://192.168.100.198:8020/");
         
        cy.get('[name="username"]').should('be.visible').click().type('0971548787');
        cy.get('[name="password"]').should('be.visible').click().type('123456');
        cy.get('.btn-login').click();
        cy.wait(500);
        // cy.get ('.error-message').should('be.empty');
        cy.get('span.mdi.mdi-menu').eq(0).click({force: true});
        cy.contains('Quản lý sản phẩm').click({force: true});
        cy.contains('Danh sách').click({force: true});

        //Update product
        cy.get('a[href="sua-san-pham/4487"]').click({force: true});
        cy.get('input[name="productCode"]').should('be.disabled').and('be.value','MOON0121121');
        cy.get('input[name="productName"]').should('be.value','MOON012').click({force: true}).clear().type('MOON012');
        cy.get('input[name="taxRate"]').should('be.value','10').click({force: true}).clear().type('12');
        cy.get('input[name="unitName"]').should('be.value','Cái').click({force: true}).clear().type('Cái');

        cy.get('input[name="idService"]').should('be.disabled').and('be.value','Food');
        cy.get('button[type="submit"]').contains('Chỉnh sửa').click({force: true});
        cy.get('.Toastify').should('be.text','Thuế suất truyền vào không hợp lệ')
    });
  
  })