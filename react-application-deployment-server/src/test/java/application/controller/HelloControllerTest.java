package application.controller;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.stream.Stream;

import static org.junit.jupiter.params.provider.Arguments.arguments;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@DisplayName("HelloController class tests")
@WebMvcTest(HelloController.class)
class HelloControllerTest {
    @Autowired
    private MockMvc mvc;

    @Nested
    @TestInstance(TestInstance.Lifecycle.PER_CLASS)
    @DisplayName("getMessage method tests")
    class GetMessageTest {
        private Stream<Arguments> data() {
            return Stream.of(
                    arguments(null, "world"),
                    arguments("Name1", "Name1"),
                    arguments("Name2", "Name2"),
                    arguments("Name3", "Name3")
            );
        }

        @ParameterizedTest
        @MethodSource("data")
        void getMessage(String name, String expected) throws Exception {
            mvc.perform(get("/api/hello/message")
                    .param("name", name))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.valueOf("text/plain;charset=UTF-8")))
                    .andExpect(jsonPath("$").value(String.format("Hello, %s!", expected)));
        }
    }
}
