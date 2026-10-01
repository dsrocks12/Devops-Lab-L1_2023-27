package io.github.dakshitsingh;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class PortfolioTest {
    @Test
    void summaryContainsStudentIdentity() {
        assertTrue(Portfolio.summary().contains("Dakshit Singh"));
        assertTrue(Portfolio.summary().contains("23070122078"));
    }

    @Test
    void portfolioListsDevOpsSkills() {
        assertEquals(5, Portfolio.skills().size());
        assertTrue(Portfolio.skills().contains("Jenkins"));
    }
}
