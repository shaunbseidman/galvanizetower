describe('bucket3', function() {
  it('runs these tests succesfully', function() {
    expect(true).to.equal(true)
    cy.visit("http://cute-middle.surge.sh/#/");
    cy.get('button').contains('Click Me').click()
    cy.get('button').contains('Get Nike Info').click()
    cy.get('button').contains('Submit New Entry').click()
  })
})
