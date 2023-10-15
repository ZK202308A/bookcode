

const Ch03 = () => {
  return ( 
    <div className="text-2xl">
    <ul>
      <li>
        <div className="p-3 font-extrabold bg-green-500 m-3" >3.1.2</div>
        <div className="border-2 m-2">
          <pre>
          {` 

package org.zerock.mallapi.domain;

import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tbl_todo")
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Todo {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long tno;
  
  private String title;

  private String writer;

  private boolean complete;

  private LocalDate dueDate;

}


---------------------------------------------------------------------------------------

package org.zerock.mallapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.zerock.mallapi.domain.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long>{
  
}



          `}
          </pre>
        </div>
      </li>

      <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.2 </div>
          <div className="border-2 m-2">
            <pre>
            {`

package org.zerock.mallapi.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class TodoRepositoryTests {

  @Autowired
  private TodoRepository todoRepository;

  @Test
  public void test1() {

    log.info("--------------------------");
    log.info(todoRepository);

  }
}



            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.2.1 </div>
          <div className="border-2 m-2">
            <pre>
            {`

package org.zerock.mallapi.repository;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.zerock.mallapi.domain.Todo;

import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class TodoRepositoryTests {

  @Autowired
  private TodoRepository todoRepository;

  @Test
  public void testInsert() {

    for (int i = 1; i <= 100; i++) {

      Todo todo = Todo.builder()
      .title("Title..." + i)
      .dueDate(LocalDate.of(2023,12,31))
      .writer("user00")
      .build();

      todoRepository.save(todo);
    }
  }

}


            `}
            </pre>
          </div>
        </li>


        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.2.2 </div>
          <div className="border-2 m-2">
            <pre>
            {`

  @Test
  public void testRead() {

    //존재하는 번호로 확인 
    Long tno = 33L;

    java.util.Optional<Todo> result = todoRepository.findById(tno);

    Todo todo = result.orElseThrow();

    log.info(todo);
  }


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.2.3 </div>
          <div className="border-2 m-2">
            <pre>
            {`

public class Todo {
  
  ...생략 

  public void changeTitle(String title){
    this.title = title;
  }

  public void changeComplete(boolean complete){
    this.complete = complete;
  }

  public void changeDueDate(LocalDate dueDate){
    this.dueDate = dueDate;
  }

}

---------------------------------------------------------------------------------------


  @Test
  public void testModify() {

    Long tno = 33L;

    Optional<Todo> result = todoRepository.findById(tno); //java.util 패키지의 Optional

    Todo todo = result.orElseThrow();
    todo.changeTitle("Modified 33...");
    todo.changeComplete(true);
    todo.changeDueDate(LocalDate.of(2023,10,10));

    todoRepository.save(todo);

  }


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.2.4 </div>
          <div className="border-2 m-2">
            <pre>
            {`

@Test
public void testDelete() {
  Long tno = 1L;

  todoRepository.deleteById(tno);

}


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.2.5 </div>
          <div className="border-2 m-2">
            <pre>
            {`

package org.zerock.mallapi.repository;

...

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.zerock.mallapi.domain.Todo;

import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class TodoRepositoryTests {

  ...

  @Test
  public void testPaging() {

    //import org.springframework.data.domain.Pageable;

    Pageable pageable = PageRequest.of(0,10, Sort.by("tno").descending());

    Page<Todo> result = todoRepository.findAll(pageable);

    log.info(result.getTotalElements());

    result.getContent().stream().forEach(todo -> log.info(todo));

  }

}


            `}
            </pre>
          </div>
        </li>


        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.3 </div>
          <div className="border-2 m-2">
            <pre>
            {`

package org.zerock.mallapi.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TodoDTO {

  private Long tno;

  private String title;

  private String writer;

  private boolean complete;

  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
  private LocalDate dueDate;
}


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.3.1 </div>
          <div className="border-2 m-2">
            <pre>
            {`

package org.zerock.mallapi.service;

import org.zerock.mallapi.dto.TodoDTO;

public interface TodoService {
  
  Long register(TodoDTO todoDTO);

}


-------------------------------------------------------------------------------------------


package org.zerock.mallapi.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.zerock.mallapi.dto.TodoDTO;

import lombok.extern.log4j.Log4j2;

@Service
@Transactional
@Log4j2
public class TodoServiceImpl implements TodoService {

  @Override
  public Long register(TodoDTO todoDTO) {
    
    log.info(".........");

    return null;
  }
}

            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.3.2 </div>
          <div className="border-2 m-2">
            <pre>
            {`

package org.zerock.mallapi.config;

import org.springframework.context.annotation.Configuration;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;

@Configuration
public class RootConfig {

  @Bean
  public ModelMapper getMapper() {
    ModelMapper modelMapper = new ModelMapper();
    modelMapper.getConfiguration()
            .setFieldMatchingEnabled(true)
            .setFieldAccessLevel(org.modelmapper.config.Configuration.AccessLevel.PRIVATE)
            .setMatchingStrategy(MatchingStrategies.LOOSE);

    return modelMapper;
  }
}


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.4.1</div>
          <div className="border-2 m-2">
            <pre>
            {`

package org.zerock.mallapi.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.zerock.mallapi.domain.Todo;
import org.zerock.mallapi.dto.TodoDTO;
import org.zerock.mallapi.repository.TodoRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Transactional
@Log4j2
@RequiredArgsConstructor  // 생성자 자동 주입
public class TodoServiceImpl implements TodoService {

  //자동주입 대상은 final로 
  private final ModelMapper modelMapper;

  private final TodoRepository todoRepository;

  @Override
  public Long register(TodoDTO todoDTO) {
    
    log.info(".........");

    Todo todo = modelMapper.map(todoDTO, Todo.class);

    Todo savedTodo = todoRepository.save(todo);

    return savedTodo.getTno();

  }
}

------------------------------------------------------------------------

package org.zerock.mallapi.service;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import org.zerock.mallapi.dto.TodoDTO;

import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class TodoServiceTests {
  
  @Autowired
  private TodoService todoService;

  @Test
  public void testRegister() {

    TodoDTO todoDTO = TodoDTO.builder()
    .title("서비스 테스트")
    .writer("tester")
    .dueDate(LocalDate.of(2023,10,10))
    .build();

    Long tno = todoService.register(todoDTO);

    log.info("TNO: " + tno);
    
  }

}


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.4.2</div>
          <div className="border-2 m-2">
            <pre>
            {`
public interface TodoService {
  
  Long register(TodoDTO todoDTO);

  TodoDTO get(Long tno);
}

------------------------------------------------------------------------

  @Override
  public TodoDTO get(Long tno) {
    
    Optional<Todo> result = todoRepository.findById(tno);

    Todo todo = result.orElseThrow();

    TodoDTO dto = modelMapper.map(todo, TodoDTO.class);

    return dto;
  }

  ------------------------------------------------------------------------

  @Test
  public void testGet() {

    Long tno = 101L;

    TodoDTO todoDTO = todoService.get(tno);

    log.info(todoDTO);

  }

            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >2.5 </div>
          <div className="border-2 m-2">
            <pre>
            {`

public interface TodoService {
  
  Long register(TodoDTO todoDTO);

  TodoDTO get(Long tno);

  void modify(TodoDTO todoDTO);

  void remove(Long tno);
}



------------------------------------------------------------------------


  @Override
  public void modify(TodoDTO todoDTO) {

    Optional<Todo> result = todoRepository.findById(todoDTO.getTno());

    Todo todo = result.orElseThrow();

    todo.changeTitle(todoDTO.getTitle());
    todo.changeDueDate(todoDTO.getDueDate());
    todo.changeComplete(todoDTO.isComplete());
 
    todoRepository.save(todo);

  }

  @Override
  public void remove(Long tno) {
    
    todoRepository.deleteById(tno);

  }


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.5 </div>
          <div className="border-2 m-2">
            <pre>
            {`

package org.zerock.mallapi.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
public class PageRequestDTO {

  @Builder.Default
  private int page = 1;

  @Builder.Default
  private int size = 10;
}

------------------------------------------------------------------------

package org.zerock.mallapi.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Data
public class PageResponseDTO<E> {

  private List<E> dtoList;

  private List<Integer> pageNumList;

  private PageRequestDTO pageRequestDTO;

  private boolean prev, next;

  private int totalCount, prevPage, nextPage, totalPage, current;

  @Builder(builderMethodName = "withAll")
  public PageResponseDTO(List<E> dtoList, PageRequestDTO pageRequestDTO, long totalCount) {

    this.dtoList = dtoList;
    this.pageRequestDTO = pageRequestDTO;
    this.totalCount = (int)totalCount;

    int end =   (int)(Math.ceil( pageRequestDTO.getPage() / 10.0 )) *  10;

    int start = end - 9;

    int last =  (int)(Math.ceil((totalCount/(double)pageRequestDTO.getSize())));

    end =  end > last ? last: end;

    this.prev = start > 1;


    this.next =  totalCount > end * pageRequestDTO.getSize();

    this.pageNumList = IntStream.rangeClosed(start,end).boxed().collect(Collectors.toList());

    if(prev) {
        this.prevPage = start -1;
    }

    if(next) {
        this.nextPage = end + 1;
    }

    this.totalPage = this.pageNumList.size();

    this.current = pageRequestDTO.getPage();

  }
}



            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.5.1 </div>
          <div className="border-2 m-2">
            <pre>
            {`

package org.zerock.mallapi.service;

import org.zerock.mallapi.dto.PageRequestDTO;
import org.zerock.mallapi.dto.PageResponseDTO;
import org.zerock.mallapi.dto.TodoDTO;

public interface TodoService {
  
  …생략 

  PageResponseDTO<TodoDTO> list(PageRequestDTO pageRequestDTO);
}


--------------------------------------------------------------------

package org.zerock.mallapi.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.zerock.mallapi.domain.Todo;
import org.zerock.mallapi.dto.PageRequestDTO;
import org.zerock.mallapi.dto.PageResponseDTO;
import org.zerock.mallapi.dto.TodoDTO;
import org.zerock.mallapi.repository.TodoRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Transactional
@Log4j2
@RequiredArgsConstructor  // 생성자 자동 주입
public class TodoServiceImpl implements TodoService {

  //자동주입 대상은 final로 
  private final ModelMapper modelMapper;

  private final TodoRepository todoRepository;

…생략 

  @Override
  public PageResponseDTO<TodoDTO> list(PageRequestDTO pageRequestDTO) {

    Pageable pageable = 
      PageRequest.of( 
        pageRequestDTO.getPage() - 1 ,  // 1페이지가 0이므로 주의 
        pageRequestDTO.getSize(), 
        Sort.by("tno").descending());

    Page<Todo> result = todoRepository.findAll(pageable);    

    List<TodoDTO> dtoList = result.getContent().stream()
      .map(todo -> modelMapper.map(todo, TodoDTO.class))
      .collect(Collectors.toList());
    
    long totalCount = result.getTotalElements();

    PageResponseDTO<TodoDTO> responseDTO = PageResponseDTO.<TodoDTO>withAll()
      .dtoList(dtoList)
      .pageRequestDTO(pageRequestDTO)
      .totalCount(totalCount)
      .build();

    return responseDTO;
  }

}


--------------------------------------------------------------------------------

  @Test
  public void testList() {

    PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
    .page(2)
    .size(10)
    .build();

    PageResponseDTO<TodoDTO> response = todoService.list(pageRequestDTO);

    log.info(response);

  }


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.5.2 </div>
          <div className="border-2 m-2">
            <pre>
            {`

package org.zerock.mallapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.mallapi.dto.PageRequestDTO;
import org.zerock.mallapi.dto.PageResponseDTO;
import org.zerock.mallapi.dto.TodoDTO;
import org.zerock.mallapi.service.TodoService;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;


@RestController
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/api/todo")
public class TodoController {
  
  private final TodoService service;

  @GetMapping("/{tno}")
  public TodoDTO get(@PathVariable(name ="tno") Long tno) {

    return service.get(tno);
  }

  @GetMapping("/list")
  public PageResponseDTO<TodoDTO> list(PageRequestDTO pageRequestDTO ) {

    log.info(pageRequestDTO);

    return service.list(pageRequestDTO);
  }

}


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.6 </div>
          <div className="border-2 m-2">
            <pre>
            {`

package org.zerock.mallapi.controller.advice;

import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * CustomControllerAdvice
 */
@RestControllerAdvice
public class CustomControllerAdvice {


  @ExceptionHandler(NoSuchElementException.class)
  protected ResponseEntity<?> notExist(NoSuchElementException e) {

      String msg = e.getMessage();

      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("msg", msg));
  }

  @ExceptionHandler(MethodArgumentNotValidException.class)
  protected ResponseEntity<?> handleIllegalArgumentException(MethodArgumentNotValidException e) {

      String msg = e.getMessage();

      return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(Map.of("msg", msg));
  }
}


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.7.1</div>
          <div className="border-2 m-2">
            <pre>
            {`
package org.zerock.mallapi.controller.formatter;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

import org.springframework.format.Formatter;

/**
 * LocalDateFormatter
 */
public class LocalDateFormatter implements Formatter<LocalDate>{

  @Override
  public LocalDate parse(String text, Locale locale) {
      return LocalDate.parse(text, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
  }

  @Override
  public String print(LocalDate object, Locale locale) {
      return DateTimeFormatter.ofPattern("yyyy-MM-dd").format(object);
  }
  
}


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.7.2 </div>
          <div className="border-2 m-2">
            <pre>
            {`

  @PostMapping("/")
  public Map<String, Long> register(@RequestBody TodoDTO todoDTO){
   
    log.info("TodoDTO: " + todoDTO);

    Long tno = service.register(todoDTO);
    
    return Map.of("TNO", tno);
  }


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.7.3 </div>
          <div className="border-2 m-2">
            <pre>
            {`

  @PutMapping("/{tno}")
  public Map<String, String> modify( 
    @PathVariable(name="tno") Long tno, 
    @RequestBody TodoDTO todoDTO) {

    todoDTO.setTno(tno);

    log.info("Modify: " + todoDTO);

    service.modify(todoDTO);

    return Map.of("RESULT", "SUCCESS");
  }


            `}
            </pre>
          </div>
        </li>


        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >3.7.4</div>
          <div className="border-2 m-2">
            <pre>
            {`

  @DeleteMapping("/{tno}")
  public Map<String, String> remove( @PathVariable(name="tno") Long tno ){

    log.info("Remove:  " + tno);

    service.remove(tno);

    return Map.of("RESULT", "SUCCESS");
  }


  ------------------------------------------------------------------------------------

  package org.zerock.mallapi.config;

  import org.springframework.context.annotation.Configuration;
  import org.springframework.format.FormatterRegistry;
  import org.springframework.web.servlet.config.annotation.CorsRegistry;
  import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
  import org.zerock.mallapi.controller.formatter.LocalDateFormatter;
  
  @Configuration
  public class CustomServletConfig implements WebMvcConfigurer{
  
    @Override
    public void addFormatters(FormatterRegistry registry) {
      
      registry.addFormatter(new LocalDateFormatter());
    }
  
    @Override
    public void addCorsMappings(CorsRegistry registry) {
  
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("HEAD", "GET", "POST", "PUT", "DELETE", "OPTIONS")
                .maxAge(300)
                .allowedHeaders("Authorization", "Cache-Control", "Content-Type");
    }
  
  }
  

            `}
            </pre>
          </div>
        </li>



    </ul>
    </div>      
   );
}
 
export default Ch03;
