package application.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.HtmlUtils;

/**
 * Hello controller.
 */
@RestController
@RequestMapping("/api/hello")
public class HelloController {
    @GetMapping("/message")
    public String getMessage(@RequestParam(required = false) String name) {
        return String.format("Hello, %s!",
                (name != null) ? HtmlUtils.htmlEscape(name) : "world");
    }
}
