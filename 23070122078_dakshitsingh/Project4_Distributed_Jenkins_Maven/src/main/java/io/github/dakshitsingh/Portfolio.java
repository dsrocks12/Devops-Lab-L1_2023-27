package io.github.dakshitsingh;

import java.util.List;

public final class Portfolio {
    private Portfolio() {
    }

    public static List<String> skills() {
        return List.of("Git", "Docker", "Jenkins", "Maven", "React");
    }

    public static String summary() {
        return "Dakshit Singh | PNR 23070122078 | " + String.join(", ", skills());
    }

    public static void main(String[] args) {
        System.out.println(summary());
    }
}
