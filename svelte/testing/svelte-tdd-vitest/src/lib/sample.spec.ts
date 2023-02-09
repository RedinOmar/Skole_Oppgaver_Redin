import {describe, test, expect} from 'vitest';

// decribe grupperer tester
describe("Example File", () => {

    // test representerer en test som kan innholde forventninger
    test("Sample test", () => {

        // representerer uttrykket du tester
        expect(1 + 3).equal(4);
    });
});