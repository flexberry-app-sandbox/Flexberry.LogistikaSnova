package Logistika_snova.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Logistika_snova.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Клиенты
 */
@Entity(name = "IISLogistika_snovaКлиенты")
@Table(schema = "public", name = "Клиенты")
public class Klienty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Заказчик")
    private String заказчик;

    @Column(name = "Телефон")
    private Integer телефон;

    @Column(name = "АдресПоставки")
    private String адреспоставки;


    public Klienty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getЗаказчик() {
      return заказчик;
    }

    public void setЗаказчик(String заказчик) {
      this.заказчик = заказчик;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }

    public String getАдресПоставки() {
      return адреспоставки;
    }

    public void setАдресПоставки(String адреспоставки) {
      this.адреспоставки = адреспоставки;
    }


}