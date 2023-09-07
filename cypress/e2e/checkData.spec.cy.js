describe("Checking input data", function () {
    it("Sample test case of login", function () {
      cy.readFile('C:/Users/Admin/Documents/IMEDIA/IMEDIA/Automation_Testing/cypress/fixtures/excelData.json').then(data => {
        const jsonData = [];
      
        data.forEach(item => {
          const username = item.username;
          const password = item.password;
      
          cy.visit("http://192.168.100.198:8020/");
         
          cy.get('[name="username"]').should('be.visible').click().type(username);
          cy.get('[name="password"]').should('be.visible').click().type(password);
          cy.get('.btn-login').click();
          cy.wait(500);
      
          cy.url().then(newUrl => {
            if (newUrl === "http://192.168.100.198:8020/") {
              cy.log('URL không thay đổi');
              cy.get('.error-message').invoke('text').then(text => {
                cy.log(text);
                const result = text;
      
                jsonData.push({ username, password, result });
              });
            } else {
              cy.log('URL đã thay đổi');
              cy.log('Đăng nhập thành công với:');
              cy.log('Tên người dùng:', username);
              cy.log('Mật khẩu:', password);
      
              const result = "Đăng nhập thành công";
              jsonData.push({ username, password, result });
              cy.get('i.mdi.mdi-power').click();
              
            }
          });
        });
      
        cy.writeFile("C:/Users/Admin/Documents/IMEDIA/IMEDIA/Automation_Testing/cypress/fixtures/outputdata.json", jsonData);
      });
    });
  });