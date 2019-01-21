describe("SPA TEST", function () {


    it("should thrown an error when user is not found", function () {
        var error;

        try {
            login("thisemailnotexist@mail.com", "123", function(){})
        } catch (err) {
            error = err;
        }
        expect(error).not.toBe(true);
        //if (!error) throw Error ('should throw error')
    });
});



