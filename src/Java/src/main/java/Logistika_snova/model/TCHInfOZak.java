package Logistika_snova.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Logistika_snova.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧИнфОЗак
 */
@Entity(name = "IISLogistika_snovaТЧИнфОЗак")
@Table(schema = "public", name = "ТЧИнфОЗак")
public class TCHInfOZak {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private Integer количество;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Gruz")
    @Convert("Gruz")
    @Column(name = "Груз", length = 16, unique = true, nullable = false)
    private UUID _gruzid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Gruz", insertable = false, updatable = false)
    private Gruz gruz;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DokumPostav")
    @Convert("DokumPostav")
    @Column(name = "ДокумПостав", length = 16, unique = true, nullable = false)
    private UUID _dokumpostavid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DokumPostav", insertable = false, updatable = false)
    private DokumPostav dokumpostav;


    public TCHInfOZak() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }


}